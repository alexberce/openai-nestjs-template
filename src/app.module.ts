import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

/** Local Imports **/
import { UserModule } from "./modules/user";
import { AuthModule } from "./modules/auth";
import { AiModule } from "./modules/ai/ai.module";

import { validate } from './config/validation';

@Module({
  imports: [
    /** Common Modules **/
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),

    /** App Modules **/
    AiModule,
    AuthModule,
    UserModule
  ],
})
export default class AppModule {}
