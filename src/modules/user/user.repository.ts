import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';

import { User } from './user.schema';
import { AbstractRepository } from "../../libs/database/mongo";

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  constructor(
    @InjectConnection() connection: Connection,
    @InjectModel(User.name) model: Model<User>,
  ) {
    super(model, connection);
  }
}

