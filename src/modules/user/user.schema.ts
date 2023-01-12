import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/** Libs Imports **/
import {AbstractDocument, defaultSchemaOptions} from "../../libs/database/mongo";

/** Local Imports **/
import { EUserRole, EUserStatus } from "./enums";

@Schema({ ...defaultSchemaOptions, collection: 'users' })
export class User extends AbstractDocument {
  @ApiProperty()
  @Prop({ type: String, unique: true })
  email: string;

  @Exclude()
  @Prop({ type: String })
  password: string;

  @ApiProperty({ enum: EUserRole, isArray: true })
  @Prop({ type: Array, default: [EUserRole.User] })
  roles: EUserRole[];

  @ApiProperty({ enum: EUserStatus })
  @Prop({ type: String, default: EUserStatus.Active })
  status: EUserStatus;
}

export const UserSchema = SchemaFactory.createForClass(User);
