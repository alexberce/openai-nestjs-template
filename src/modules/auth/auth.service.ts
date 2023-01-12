import { Injectable, UnauthorizedException } from '@nestjs/common';

/** Libs Imports **/
import { EncryptionService } from "../../libs/security/encryption";
import { JwtModel, JwtService, JwtType } from "../../libs/security/jwt";

/** Cross-Module Imports **/
import { User, UserService } from "../user";

/** Local Imports **/
import { SignUpDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signUp(data: SignUpDto): Promise<JwtModel> {
    const user = await this.userService.create(data);

    return this.jwtService.generateJwt({
      id: user._id,
      type: JwtType.AppLogin,
    });
  }

  signIn(user: User) {
    return this.jwtService.generateJwt({
      id: user._id,
      type: JwtType.AppLogin,
    });
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.findOneByEmail(
        email.toLowerCase()
      );

      if (!await EncryptionService.validatePassword(plainTextPassword, user.password)) {
        throw new UnauthorizedException();
      }

      user.password = undefined;
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  refreshToken(token: string): JwtModel {
    return this.jwtService.refreshToken(token);
  }
}
