import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateKnowledgeBases1791026050694 implements MigrationInterface {
    name = 'CreateKnowledgeBases1791026050694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // The table may already exist if query.sql was applied by hand.
        if (await queryRunner.hasTable('knowledge_bases')) return;

        await queryRunner.query(`CREATE TABLE "knowledge_bases" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, "content" text NOT NULL, "category" character varying(100), "status" character varying(50) NOT NULL DEFAULT 'active', "created_by" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b7da0ee578e15ebb6213465440d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "knowledge_bases" ADD CONSTRAINT "FK_51da4fa8719970ba2e4c24598ac" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "knowledge_bases" DROP CONSTRAINT "FK_51da4fa8719970ba2e4c24598ac"`);
        await queryRunner.query(`DROP TABLE "knowledge_bases"`);
    }

}
