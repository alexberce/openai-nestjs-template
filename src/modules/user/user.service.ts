import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';

/** Libs Imports **/
import { EncryptionService } from "../../libs/security/encryption";

/** Local Imports **/
import { User } from './user.schema';
import { CreateUserDto } from './dto';
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
  ) {}

  async fetchById(id: Types.ObjectId): Promise<User> {
    return this.repository.findOne({_id: id});
  }

  findOneByEmail(email: string): Promise<User> {
    return this.repository.findOne({email: email});
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: Partial<User> = {
      email: dto.email,
      password: await EncryptionService.hashPassword(dto.password)
    };

    return this.repository.create(data);
  }

  async delete(id: Types.ObjectId) {
    await this.repository.model.deleteOne({_id: id});
  }
}
