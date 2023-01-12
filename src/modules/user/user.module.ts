import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/** Libs Imports **/
import { MongoDatabaseModule } from "../../libs/database";

/** Local Imports **/
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import { UserController } from './user.controller';
import { UserRepository } from "./user.repository";

@Module({
  imports: [
    MongoDatabaseModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserController, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
