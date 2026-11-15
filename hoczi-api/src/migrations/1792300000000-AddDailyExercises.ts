import { MigrationInterface, QueryRunner } from "typeorm";

// Daily exercise emails: subscriptions, shared daily sets, exercises and deliveries.
// See specs/001-daily-exercise-email/data-model.md. Additive only; down drops the new tables.
export class AddDailyExercises1792300000000 implements MigrationInterface {
    name = 'AddDailyExercises1792300000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise_subscriptions" (
            "id" SERIAL NOT NULL,
            "user_id" integer NOT NULL,
            "tenant_id" integer,
            "subject_id" integer NOT NULL,
            "grade_id" integer NOT NULL,
            "questions_per_day" integer NOT NULL DEFAULT 3,
            "send_time" TIME NOT NULL DEFAULT '07:00:00',
            "timezone" character varying(64) NOT NULL DEFAULT 'Asia/Ho_Chi_Minh',
            "is_active" boolean NOT NULL DEFAULT true,
            "unsubscribe_token" character varying(64) NOT NULL,
            "created_by" integer,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_exercise_subscriptions_token" UNIQUE ("unsubscribe_token"),
            CONSTRAINT "UQ_exercise_subscriptions_user_subject_grade" UNIQUE ("user_id", "subject_id", "grade_id"),
            CONSTRAINT "CHK_exercise_subscriptions_questions_per_day" CHECK ("questions_per_day" BETWEEN 1 AND 10),
            CONSTRAINT "PK_exercise_subscriptions" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_exercise_subscriptions_active" ON "exercise_subscriptions" ("is_active")`);
        await queryRunner.query(`ALTER TABLE "exercise_subscriptions" ADD CONSTRAINT "FK_exercise_subscriptions_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise_subscriptions" ADD CONSTRAINT "FK_exercise_subscriptions_subject" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise_subscriptions" ADD CONSTRAINT "FK_exercise_subscriptions_grade" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

        await queryRunner.query(`CREATE TABLE "daily_exercise_sets" (
            "id" SERIAL NOT NULL,
            "subject_id" integer NOT NULL,
            "grade_id" integer NOT NULL,
            "set_date" date NOT NULL,
            "status" character varying(20) NOT NULL DEFAULT 'generating',
            "exercise_count" integer NOT NULL DEFAULT 0,
            "provider" character varying(50),
            "model" character varying(100),
            "prompt_version" character varying(50),
            "error" text,
            "generated_at" TIMESTAMP WITH TIME ZONE,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_daily_exercise_sets_subject_grade_date" UNIQUE ("subject_id", "grade_id", "set_date"),
            CONSTRAINT "PK_daily_exercise_sets" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "daily_exercise_sets" ADD CONSTRAINT "FK_daily_exercise_sets_subject" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "daily_exercise_sets" ADD CONSTRAINT "FK_daily_exercise_sets_grade" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

        await queryRunner.query(`CREATE TABLE "daily_exercises" (
            "id" SERIAL NOT NULL,
            "set_id" integer NOT NULL,
            "position" integer NOT NULL,
            "question" text NOT NULL,
            "answer" text NOT NULL,
            "explanation" text NOT NULL,
            "edited_by_admin" boolean NOT NULL DEFAULT false,
            "edited_by" integer,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_daily_exercises_set_position" UNIQUE ("set_id", "position"),
            CONSTRAINT "PK_daily_exercises" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "daily_exercises" ADD CONSTRAINT "FK_daily_exercises_set" FOREIGN KEY ("set_id") REFERENCES "daily_exercise_sets"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

        await queryRunner.query(`CREATE TABLE "exercise_deliveries" (
            "id" SERIAL NOT NULL,
            "subscription_id" integer NOT NULL,
            "set_id" integer,
            "user_id" integer NOT NULL,
            "tenant_id" integer,
            "delivery_date" date NOT NULL,
            "kind" character varying(20) NOT NULL DEFAULT 'scheduled',
            "status" character varying(20) NOT NULL DEFAULT 'pending',
            "exercise_count" integer,
            "questions_sent_at" TIMESTAMP WITH TIME ZONE,
            "answers_sent_at" TIMESTAMP WITH TIME ZONE,
            "error" text,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "PK_exercise_deliveries" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "UQ_exercise_deliveries_scheduled_day" ON "exercise_deliveries" ("subscription_id", "delivery_date") WHERE "kind" = 'scheduled'`);
        await queryRunner.query(`CREATE INDEX "IDX_exercise_deliveries_date" ON "exercise_deliveries" ("delivery_date")`);
        await queryRunner.query(`CREATE INDEX "IDX_exercise_deliveries_status" ON "exercise_deliveries" ("status")`);
        await queryRunner.query(`ALTER TABLE "exercise_deliveries" ADD CONSTRAINT "FK_exercise_deliveries_subscription" FOREIGN KEY ("subscription_id") REFERENCES "exercise_subscriptions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise_deliveries" ADD CONSTRAINT "FK_exercise_deliveries_set" FOREIGN KEY ("set_id") REFERENCES "daily_exercise_sets"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exercise_deliveries"`);
        await queryRunner.query(`DROP TABLE "daily_exercises"`);
        await queryRunner.query(`DROP TABLE "daily_exercise_sets"`);
        await queryRunner.query(`DROP TABLE "exercise_subscriptions"`);
    }
}
