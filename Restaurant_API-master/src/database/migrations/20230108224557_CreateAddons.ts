import { Knex, knex } from 'knex'

const tableName = 'addons';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets autoincremented
    t.increments();

    t.string('name').notNullable();

    t.string('description')
    t.integer('price')

    t.string('category')

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
