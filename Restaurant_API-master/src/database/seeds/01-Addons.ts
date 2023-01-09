import { Knex, knex } from 'knex'
import { AddonsModel } from '../models/addons.model';

export async function seed(knex: Knex): Promise<any> {

    await AddonsModel.query(knex).insert([
        {
          name: 'Spicy',
          description: 'Ab animi at consectetur error ex fugiat magni minima minus reiciendis sapiente?',
          price: 50,
          category: 'pastry',
        },
        {
            name: 'Spicier',
            description: 'Ab animi at consectetur error ex fugiat magni minima minus reiciendis sapiente?',
            price: 70,
            category: 'pastry',
          },
          {
            name: 'Spiciest',
            description: 'Ab animi at consectetur error ex fugiat magni minima minus reiciendis sapiente?',
            price: 90,
            category: 'pastry',
          }
      ]);
}
