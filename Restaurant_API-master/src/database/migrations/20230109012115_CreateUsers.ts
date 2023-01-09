import { Knex, knex } from 'knex'

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets autoincremented
    t.increments();

    t.string('firstName').notNullable();
    t.string('lastName').notNullable();
    t.string('email')
    t.string('role')

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
