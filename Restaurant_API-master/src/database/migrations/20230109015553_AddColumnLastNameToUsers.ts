import { Knex, knex } from 'knex'

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema.table('users', table => {
    table.string('lastName');
  })
}

export async function down(knex: Knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('lastName');
  })
}
