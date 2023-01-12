import { Type } from 'class-transformer';
import { ObjectId, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

/** Local Imports **/
import { JwtType } from '../enums';

export class JwtPayloadModel {
  @ApiProperty()
  @Type(() => Types.ObjectId)
  id: Types.ObjectId;

  @ApiProperty()
  @Type(() => String)
  type: JwtType;

  static fromRefreshTokenPayload(
    payload: Partial<JwtPayloadModel>
  ): JwtPayloadModel {
    const newPayload = new JwtPayloadModel();
    newPayload.id = Types.ObjectId.createFromHexString(payload.id.toString()) as Types.ObjectId;
    newPayload.type = payload.type;

    return newPayload;
  }
}
