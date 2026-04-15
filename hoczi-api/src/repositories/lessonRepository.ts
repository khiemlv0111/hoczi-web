import { AppDataSource } from '../data-source';
import { Lesson } from '../entities/Lesson';
// import { UserProfile } from '../entities/UserProfile';

class LessonRepository {
    private get repo() {
        return AppDataSource.getRepository(Lesson);
    }


    async createOne(userId: number, data: any) {
        const classRoom = this.repo.create({
            title: data.title,
            content: data.content,
            subject_id: data.subjectId,
            lesson_type: data.lesson_type,
            media_url: data.media_url,
            estimated_minutes: data.estimated_minutes,
            topic_id: data.topicId,
            description: data.description,
            grade_id: data.gradeId,
            created_by: userId,
        });
        return this.repo.save(classRoom);
    }



    async findAll(page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            relations: ["quiz_sessions"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }


}


export const lessonRepository = new LessonRepository();
