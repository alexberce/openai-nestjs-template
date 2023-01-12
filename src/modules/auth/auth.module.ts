import { PassportModule } from '@nestjs/passport';
import { forwardRef, Module } from '@nestjs/common';

/** Libs Imports **/
import { JwtModule } from "../../libs/security/jwt";

/** Cross-Module Imports **/
import { UserModule } from "../user";

/** Local Imports **/
import { AuthService } from "./auth.service";
import { JwtAuthGuardName } from "./constants";
import { AuthController } from "./auth.controller";
import { JwtAuthStrategy, LocalAuthStrategy } from "./strategies";

@Module({
  imports: [
    JwtModule,
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: [JwtAuthGuardName] }),
  ],
  providers: [AuthService, JwtAuthStrategy, LocalAuthStrategy],
  controllers: [AuthController],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
