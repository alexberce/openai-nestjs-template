import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

/** Libs Imports **/
import { JwtPayloadModel } from "../../../libs/security/jwt";

/** Cross-Module Imports **/
import { User, UserService } from "../../user";

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly accountService: UserService,
    private readonly configService: ConfigService,
  ) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayloadModel): Promise<User> {
    const user = await this.accountService.fetchById(payload.id);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
