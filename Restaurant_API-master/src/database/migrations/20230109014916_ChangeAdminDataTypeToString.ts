import { Knex, knex } from 'knex'

const tableName = 'users';

export async function up(knex: Knex) {
  await knex.schema.alterTable(tableName, function(table) {
    table.string('role').alter();
});
}

export async function down(knex: Knex) {
}
