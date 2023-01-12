import { ConfigService } from "@nestjs/config";
import { JwtService as DefaultJwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import {JwtModel, JwtPayloadModel} from "./models";

@Injectable()
export class JwtService {
  constructor(
    private readonly jwtService: DefaultJwtService,
    private readonly configService: ConfigService
  ) {}

  public generateJwt(payload: JwtPayloadModel): JwtModel {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  refreshToken(token: string): JwtModel {
    try {
      const secret = this.configService.get('JWT_REFRESH_SECRET');
      const payload = this.jwtService.verify(token, { secret });
      return this.generateJwt({
        ...JwtPayloadModel.fromRefreshTokenPayload(payload),
      });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  private generateAccessToken(payload: JwtPayloadModel): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: JwtPayloadModel): string {
    const secret = this.configService.get('JWT_REFRESH_SECRET');
    const expiresIn = this.configService.get('JWT_REFRESH_EXPIRES_IN');

    return this.jwtService.sign(payload, { secret, expiresIn });
  }
}
