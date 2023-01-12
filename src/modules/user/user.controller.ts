import { Types } from "mongoose";
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get, Param, Req, Delete, Controller, UseGuards, UseInterceptors } from '@nestjs/common';

/** Libs Imports **/
import { MongooseClassSerializer, MongooseObjectIdPipe } from "../../libs/database/mongo";

/** Cross-Module Imports **/
import { RequestWithUser } from '../auth/types';
import { JwtAuthGuard, UserRoleGuard } from '../auth/guards';

/** Local Imports **/
import { EUserRole } from "./enums";
import { User } from './user.schema';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
@UseInterceptors(MongooseClassSerializer(User))
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: User })
  @ApiOperation({ summary: 'Get own user' })
  @UseInterceptors(MongooseClassSerializer(User))
  async fetchCurrentUser(@Req() request: RequestWithUser): Promise<User> {
    const { user } = request;

    return user;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, UserRoleGuard(EUserRole.Admin))
  @ApiOkResponse({ type: User })
  @ApiOperation({ summary: 'Get user by id' })
  @UseInterceptors(MongooseClassSerializer(User))
  async fetchUserById(@Param("id", MongooseObjectIdPipe) id: unknown): Promise<User> {
    return this.userService.fetchById(id as Types.ObjectId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, UserRoleGuard(EUserRole.Admin))
  @ApiOperation({ summary: 'Delete account', description: 'Deletes a user identified by id' })
  async deleteAccount(@Param("id", MongooseObjectIdPipe) id: unknown): Promise<void> {
    return this.userService.delete(id as Types.ObjectId);
  }
}
