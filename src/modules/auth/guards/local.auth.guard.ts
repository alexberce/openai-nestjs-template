import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Local Imports **/
import { LocalAuthGuardName } from "../constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard(LocalAuthGuardName) {}
