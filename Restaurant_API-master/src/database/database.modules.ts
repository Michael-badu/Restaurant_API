import { Global, Module } from '@nestjs/common';
import { Knex, knex } from 'knex'
import { knexSnakeCaseMappers, Model } from 'objection';
import { AddonsModel } from './models/addons.model';
import { UsersModel } from './models/users.model';
import 'dotenv/config';

const models = [AddonsModel, UsersModel];

const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});
const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const database = knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers()
      });

      Model.knex(database);
      return knex;
    }
  }
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers]
})
export class DatabaseModule {}
