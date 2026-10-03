import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAiIntegration1791027143843 implements MigrationInterface {
    name = 'AddAiIntegration1791027143843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "knowledge_documents" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "original_filename" character varying(255) NOT NULL, "mime_type" character varying(100) NOT NULL, "size_bytes" bigint, "checksum" character varying(64), "hsk_standard" character varying(10) NOT NULL, "hsk_level" integer NOT NULL, "edition" character varying(100), "script" character varying(20) NOT NULL DEFAULT 'simplified', "language" character varying(20) NOT NULL DEFAULT 'zh', "content_type" character varying(50) NOT NULL, "tenant_id" integer, "book_id" integer, "book_lesson_id" integer, "storage_key" character varying(500) NOT NULL, "version" integer NOT NULL DEFAULT '1', "supersedes_document_id" integer, "openai_vector_store_id" character varying(255), "status" character varying(20) NOT NULL DEFAULT 'pending', "rights_status" character varying(50) NOT NULL, "rights_notes" text, "extraction_report" jsonb, "error_message" text, "uploaded_by" integer, "indexed_at" TIMESTAMP, "deleted_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_402a3c43fb263aa5289670e4e21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b1d55bec7a7df881e5260d4e2d" ON "knowledge_documents" ("checksum") `);
        await queryRunner.query(`CREATE INDEX "IDX_075a69b76bbb18bf27fe875582" ON "knowledge_documents" ("tenant_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_74a45224b0baf5956533efe1a0" ON "knowledge_documents" ("status") `);
        await queryRunner.query(`CREATE TABLE "knowledge_document_chunks" ("id" SERIAL NOT NULL, "document_id" integer NOT NULL, "chunk_index" integer NOT NULL, "lesson_label" character varying(255), "section_label" character varying(255), "page_start" integer, "page_end" integer, "char_count" integer NOT NULL DEFAULT '0', "openai_file_id" character varying(255), "checksum" character varying(64) NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'pending', "error_message" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_7f54631456247e76f27a120d026" UNIQUE ("document_id", "chunk_index"), CONSTRAINT "PK_0f4c5cd2867059c66f7734407a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ai_usage_logs" ("id" SERIAL NOT NULL, "user_id" integer, "tenant_id" integer, "operation" character varying(50) NOT NULL, "provider" character varying(50) NOT NULL, "model" character varying(100) NOT NULL, "prompt_version" character varying(50), "input_tokens" integer NOT NULL DEFAULT '0', "output_tokens" integer NOT NULL DEFAULT '0', "file_search_calls" integer NOT NULL DEFAULT '0', "latency_ms" integer NOT NULL DEFAULT '0', "outcome" character varying(30) NOT NULL, "error_code" character varying(255), "estimated_cost_usd" numeric(12,6) NOT NULL DEFAULT '0', "provider_request_id" character varying(100), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7f42670987a1de5cb209a77e925" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_98449f117e21b9c6afb5ab5c5e" ON "ai_usage_logs" ("tenant_id", "created_at") `);
        await queryRunner.query(`CREATE INDEX "IDX_1e5e3365fc6bd49074e5fda3f9" ON "ai_usage_logs" ("user_id", "created_at") `);
        await queryRunner.query(`CREATE INDEX "IDX_7786d018fb9c83d53875044949" ON "ai_usage_logs" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "ai_jobs" ("id" SERIAL NOT NULL, "type" character varying(50) NOT NULL, "payload" jsonb NOT NULL DEFAULT '{}', "status" character varying(20) NOT NULL DEFAULT 'queued', "attempts" integer NOT NULL DEFAULT '0', "max_attempts" integer NOT NULL DEFAULT '5', "run_after" TIMESTAMP NOT NULL DEFAULT now(), "locked_at" TIMESTAMP, "locked_by" character varying(100), "last_error" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_895e59e4adb993a3f45dacb1d6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ae416a29c52f228232db535088" ON "ai_jobs" ("status", "run_after") `);
        await queryRunner.query(`CREATE TABLE "ai_drafts" ("id" SERIAL NOT NULL, "task_type" character varying(50) NOT NULL, "request_params" jsonb NOT NULL, "output" jsonb, "citations" jsonb NOT NULL DEFAULT '[]', "retrieval" jsonb NOT NULL DEFAULT '[]', "validation_issues" jsonb NOT NULL DEFAULT '[]', "insufficient_evidence" boolean NOT NULL DEFAULT false, "provider" character varying(50) NOT NULL, "model" character varying(100) NOT NULL, "prompt_version" character varying(50) NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'draft', "tenant_id" integer, "created_by" integer, "reviewed_by" integer, "review_notes" text, "reviewed_at" TIMESTAMP, "edited" boolean NOT NULL DEFAULT false, "parent_draft_id" integer, "published_refs" jsonb, "published_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a83622f0d6fd52872e9585de51f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ac9f1bb6114dcb51d6d1f05620" ON "ai_drafts" ("status") `);
        await queryRunner.query(`CREATE INDEX "IDX_e3f4443bc4edf616ef78352bca" ON "ai_drafts" ("tenant_id") `);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" ADD "index_status" character varying(20) NOT NULL DEFAULT 'not_indexed'`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" ADD "openai_file_id" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" ADD "index_error" text`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" ADD "indexed_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "knowledge_documents" ADD CONSTRAINT "FK_05550ddf27c9bb24ac2c0905a8d" FOREIGN KEY ("uploaded_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "knowledge_document_chunks" ADD CONSTRAINT "FK_261072bcd0855c3fa32e81ea286" FOREIGN KEY ("document_id") REFERENCES "knowledge_documents"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ai_drafts" ADD CONSTRAINT "FK_991592bc3c8f7ba733fc9902274" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ai_drafts" ADD CONSTRAINT "FK_b6ba50d88de3ad8ade1d912a412" FOREIGN KEY ("reviewed_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ai_drafts" DROP CONSTRAINT "FK_b6ba50d88de3ad8ade1d912a412"`);
        await queryRunner.query(`ALTER TABLE "ai_drafts" DROP CONSTRAINT "FK_991592bc3c8f7ba733fc9902274"`);
        await queryRunner.query(`ALTER TABLE "knowledge_document_chunks" DROP CONSTRAINT "FK_261072bcd0855c3fa32e81ea286"`);
        await queryRunner.query(`ALTER TABLE "knowledge_documents" DROP CONSTRAINT "FK_05550ddf27c9bb24ac2c0905a8d"`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" DROP COLUMN "indexed_at"`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" DROP COLUMN "index_error"`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" DROP COLUMN "openai_file_id"`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" DROP COLUMN "index_status"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e3f4443bc4edf616ef78352bca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ac9f1bb6114dcb51d6d1f05620"`);
        await queryRunner.query(`DROP TABLE "ai_drafts"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ae416a29c52f228232db535088"`);
        await queryRunner.query(`DROP TABLE "ai_jobs"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7786d018fb9c83d53875044949"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1e5e3365fc6bd49074e5fda3f9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_98449f117e21b9c6afb5ab5c5e"`);
        await queryRunner.query(`DROP TABLE "ai_usage_logs"`);
        await queryRunner.query(`DROP TABLE "knowledge_document_chunks"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_74a45224b0baf5956533efe1a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_075a69b76bbb18bf27fe875582"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b1d55bec7a7df881e5260d4e2d"`);
        await queryRunner.query(`DROP TABLE "knowledge_documents"`);
    }

}
