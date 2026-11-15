import { AppDataSource } from '../data-source';
import { DailyExerciseSet, DailyExerciseSetStatus } from '../entities/DailyExerciseSet';
import { DailyExercise } from '../entities/DailyExercise';

export type SetFilter = {
    date?: string;
    subject_id?: number;
    grade_id?: number;
};

export type NewExercise = { question: string; answer: string; explanation: string };

// A set left "generating" longer than this is assumed abandoned (crashed worker) and may be claimed again.
const STALE_GENERATING_MINUTES = 10;

function rowsOf(result: any): any[] {
    // UPDATE … RETURNING yields [rows, count] with the pg driver; INSERT … RETURNING yields rows.
    return Array.isArray(result?.[0]) ? result[0] : result;
}

class DailyExerciseSetRepository {
    private get repo() {
        return AppDataSource.getRepository(DailyExerciseSet);
    }

    private get exerciseRepo() {
        return AppDataSource.getRepository(DailyExercise);
    }

    async findAll(page: number, limit: number, filter: SetFilter = {}) {
        const qb = this.repo.createQueryBuilder('set')
            .leftJoinAndSelect('set.subject', 'subject')
            .leftJoinAndSelect('set.grade', 'grade')
            .orderBy('set.set_date', 'DESC')
            .addOrderBy('set.id', 'DESC')
            .take(limit)
            .skip((page - 1) * limit);
        if (filter.date) qb.andWhere('set.set_date = :date', { date: filter.date });
        if (filter.subject_id) qb.andWhere('set.subject_id = :sid', { sid: filter.subject_id });
        if (filter.grade_id) qb.andWhere('set.grade_id = :gid', { gid: filter.grade_id });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id }, relations: { subject: true, grade: true } });
    }

    async findWithExercises(id: number) {
        return this.repo.createQueryBuilder('set')
            .leftJoinAndSelect('set.subject', 'subject')
            .leftJoinAndSelect('set.grade', 'grade')
            .leftJoinAndSelect('set.exercises', 'exercise')
            .where('set.id = :id', { id })
            .orderBy('exercise.position', 'ASC')
            .getOne();
    }

    async findBySubjectGradeDate(subjectId: number, gradeId: number, date: string) {
        return this.repo.findOne({ where: { subject_id: subjectId, grade_id: gradeId, set_date: date } });
    }

    /**
     * Claims the right to (re)generate the set for (subject, grade, date). Exactly one caller gets
     * claimed = true: whoever creates the row, or whoever takes over a failed / abandoned / too-small set.
     */
    async claimForGeneration(subjectId: number, gradeId: number, date: string, needed: number) {
        const inserted = rowsOf(await AppDataSource.query(
            `INSERT INTO daily_exercise_sets (subject_id, grade_id, set_date, status)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (subject_id, grade_id, set_date) DO NOTHING
             RETURNING id`,
            [subjectId, gradeId, date, DailyExerciseSetStatus.GENERATING],
        ));
        if (inserted.length) return { setId: Number(inserted[0].id), claimed: true };

        const updated = rowsOf(await AppDataSource.query(
            `UPDATE daily_exercise_sets
                SET status = $4, error = NULL, updated_at = now()
              WHERE subject_id = $1 AND grade_id = $2 AND set_date = $3
                AND (status = $5
                     OR (status = $4 AND updated_at < now() - ($7 || ' minutes')::interval)
                     OR (status = $6 AND exercise_count < $8))
          RETURNING id`,
            [subjectId, gradeId, date, DailyExerciseSetStatus.GENERATING, DailyExerciseSetStatus.FAILED,
                DailyExerciseSetStatus.READY, String(STALE_GENERATING_MINUTES), needed],
        ));
        if (updated.length) return { setId: Number(updated[0].id), claimed: true };

        const existing = await this.findBySubjectGradeDate(subjectId, gradeId, date);
        return { setId: existing!.id, claimed: false };
    }

    // Appends exercises after the current ones and marks the set ready, atomically.
    async appendExercisesAndMarkReady(
        setId: number,
        exercises: NewExercise[],
        // null keeps the existing provider/model (nothing new was generated)
        meta: { provider: string; model: string; promptVersion: string } | null,
    ) {
        await AppDataSource.transaction(async (manager) => {
            const set = await manager.findOneOrFail(DailyExerciseSet, { where: { id: setId } });
            const start = await manager.count(DailyExercise, { where: { set_id: setId } });
            if (exercises.length) {
                await manager.insert(DailyExercise, exercises.map((e, i) => ({
                    set_id: setId, position: start + i + 1, question: e.question, answer: e.answer, explanation: e.explanation,
                })));
            }
            set.status = DailyExerciseSetStatus.READY;
            set.exercise_count = start + exercises.length;
            if (meta) {
                set.provider = meta.provider;
                set.model = meta.model;
                set.prompt_version = meta.promptVersion;
                set.generated_at = new Date();
            }
            set.error = null;
            await manager.save(set);
        });
    }

    async markFailed(setId: number, error: string) {
        await this.repo.update(setId, { status: DailyExerciseSetStatus.FAILED, error });
    }

    // Questions of recent sets for (subject, grade), newest first, so the model can avoid repeats.
    async findRecentQuestions(subjectId: number, gradeId: number, date: string, days: number, limit: number) {
        const rows = await this.exerciseRepo.createQueryBuilder('e')
            .innerJoin('e.set', 's')
            .select('e.question', 'question')
            .where('s.subject_id = :subjectId AND s.grade_id = :gradeId', { subjectId, gradeId })
            .andWhere(`s.set_date BETWEEN (CAST(:date AS date) - CAST(:days AS integer)) AND CAST(:date AS date)`, { date, days })
            .orderBy('s.set_date', 'DESC')
            .addOrderBy('e.position', 'ASC')
            .limit(limit)
            .getRawMany();
        return rows.map((r) => String(r.question));
    }

    async findExercises(setId: number, count: number) {
        return this.exerciseRepo.find({ where: { set_id: setId }, order: { position: 'ASC' }, take: count });
    }

    async findExerciseById(id: number) {
        return this.exerciseRepo.findOne({ where: { id } });
    }

    async saveExercise(exercise: DailyExercise) {
        return this.exerciseRepo.save(exercise);
    }
}

export const dailyExerciseSetRepository = new DailyExerciseSetRepository();
