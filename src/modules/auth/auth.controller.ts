import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  Post, PreconditionFailedException,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

/** Libs Imports **/
import { JwtModel } from "../../libs/security/jwt";

/** Cross-Module Imports **/
import { EUserStatus } from "../user";

/** Local Imports **/
import { SignUpDto } from './dto';
import { LocalAuthGuard } from "./guards";
import { RequestWithUser } from "./types";
import { AuthService } from "./auth.service";

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Sign in' })
  @ApiOkResponse({ type: JwtModel })
  async signIn(@Req() request: RequestWithUser) {
    const { user } = request;

    if(user.status === EUserStatus.Disabled) {
      throw new PreconditionFailedException('Account disabled');
    }

    return this.authService.signIn(user);
  }

  @Post('sign-up')
  @HttpCode(200)
  @ApiOperation({ summary: 'Sign up' })
  @ApiOkResponse({ type: JwtModel })
  async signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh authentication token' })
  @ApiOkResponse({ type: JwtModel })
  refreshToken(@Query('refreshToken') token: string) {
    return this.authService.refreshToken(token);
  }
}
