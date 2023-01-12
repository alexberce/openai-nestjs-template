import { ApiProperty } from '@nestjs/swagger';

export class JwtModel {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
