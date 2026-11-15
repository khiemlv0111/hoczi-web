import { MigrationInterface, QueryRunner } from "typeorm";

// Admin email broadcasts and their recipients. See specs/002-admin-send-email/data-model.md.
// Additive only; down drops the two new tables.
export class AddEmailBroadcasts1792400000000 implements MigrationInterface {
    name = 'AddEmailBroadcasts1792400000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "email_broadcasts" (
            "id" SERIAL NOT NULL,
            "created_by" integer,
            "tenant_id" integer,
            "client_request_id" uuid NOT NULL,
            "subject" character varying(200) NOT NULL,
            "content_json" jsonb NOT NULL,
            "content_html" text NOT NULL,
            "content_text" text NOT NULL,
            "recipient_count" integer NOT NULL,
            "sent_count" integer NOT NULL DEFAULT 0,
            "failed_count" integer NOT NULL DEFAULT 0,
            "status" character varying(30) NOT NULL DEFAULT 'queued',
            "started_at" TIMESTAMP WITH TIME ZONE,
            "completed_at" TIMESTAMP WITH TIME ZONE,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_email_broadcasts_client_request" UNIQUE ("created_by", "client_request_id"),
            CONSTRAINT "PK_email_broadcasts" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_email_broadcasts_tenant_created" ON "email_broadcasts" ("tenant_id", "created_at")`);
        await queryRunner.query(`ALTER TABLE "email_broadcasts" ADD CONSTRAINT "FK_email_broadcasts_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);

        await queryRunner.query(`CREATE TABLE "email_broadcast_recipients" (
            "id" SERIAL NOT NULL,
            "broadcast_id" integer NOT NULL,
            "email" character varying(254) NOT NULL,
            "user_id" integer,
            "status" character varying(20) NOT NULL DEFAULT 'pending',
            "attempts" integer NOT NULL DEFAULT 0,
            "error" character varying(500),
            "provider_message_id" character varying(255),
            "locked_at" TIMESTAMP WITH TIME ZONE,
            "sent_at" TIMESTAMP WITH TIME ZONE,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_email_broadcast_recipients_email" UNIQUE ("broadcast_id", "email"),
            CONSTRAINT "PK_email_broadcast_recipients" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_email_broadcast_recipients_status" ON "email_broadcast_recipients" ("broadcast_id", "status")`);
        await queryRunner.query(`ALTER TABLE "email_broadcast_recipients" ADD CONSTRAINT "FK_email_broadcast_recipients_broadcast" FOREIGN KEY ("broadcast_id") REFERENCES "email_broadcasts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "email_broadcast_recipients"`);
        await queryRunner.query(`DROP TABLE "email_broadcasts"`);
    }
}
