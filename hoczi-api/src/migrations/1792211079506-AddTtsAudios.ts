import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTtsAudios1792211079506 implements MigrationInterface {
    name = 'AddTtsAudios1792211079506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tts_audios" ("id" SERIAL NOT NULL, "text_hash" character varying(64) NOT NULL, "provider" character varying(50) NOT NULL, "voice_id" character varying(100) NOT NULL, "model_id" character varying(100) NOT NULL, "speed" numeric(4,2) NOT NULL DEFAULT '1', "text" text NOT NULL, "storage_key" character varying(500) NOT NULL, "audio_url" text NOT NULL, "file_size_bytes" integer, "created_by" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_tts_audios_text_hash" UNIQUE ("text_hash"), CONSTRAINT "PK_tts_audios" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tts_audios"`);
    }
}
