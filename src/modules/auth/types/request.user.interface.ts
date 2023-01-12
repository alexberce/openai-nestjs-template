import { Request } from 'express';

/** Cross-Module Imports **/
import { User } from "../../user";

export interface RequestWithUser extends Request {
  user: User;
}

