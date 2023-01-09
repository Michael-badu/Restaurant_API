import { Knex, knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex) {
  await knex.schema.alterTable(tableName, (table) => {
    table.dropColumn('lastName');
  });
}

export async function down(knex: Knex) {}
