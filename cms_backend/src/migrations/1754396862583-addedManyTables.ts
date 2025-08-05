import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedManyTables1754396862583 implements MigrationInterface {
    name = 'AddedManyTables1754396862583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_2284b58f20c8443344971bf924e" UNIQUE ("contactNumber")`);
        await queryRunner.query(`ALTER TABLE "tags" ADD CONSTRAINT "UQ_a0e006b29d7876b2f5a4df70a37" UNIQUE ("tagName")`);
        await queryRunner.query(`ALTER TABLE "contact_tags" ADD CONSTRAINT "UQ_a3041f90db2a5db991492c2f5e6" UNIQUE ("contactId", "tagId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_tags" DROP CONSTRAINT "UQ_a3041f90db2a5db991492c2f5e6"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP CONSTRAINT "UQ_a0e006b29d7876b2f5a4df70a37"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_2284b58f20c8443344971bf924e"`);
    }

}
