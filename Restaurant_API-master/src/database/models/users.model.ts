import { BaseModel } from './base.model';

export class UsersModel extends BaseModel {
  static tableName = 'users';

  firstName: string;
  email: string;
  lasttName: string;
  role: string;
}