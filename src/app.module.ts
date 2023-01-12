import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

/** Local Imports **/
import { UserModule } from "./modules/user";
import { validate } from './config/validation';
import { AuthModule } from "./modules/auth";

@Module({
  imports: [
    /** Common Modules **/
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),

    /** App Modules **/
    AuthModule,
    UserModule
  ],
})
export default class AppModule {}
