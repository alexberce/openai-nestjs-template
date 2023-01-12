import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

/** Cross-Module Imports **/
import { User } from "../../user";

/** Local Imports **/
import { AuthService } from "../auth.service";

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const account = await this.authService.getAuthenticatedUser(
      email,
      password
    );

    if (!account) throw new UnauthorizedException();

    return account;
  }
}
