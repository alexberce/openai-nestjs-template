import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Local Imports **/
import { JwtAuthGuardName } from "../constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard(JwtAuthGuardName) {}
