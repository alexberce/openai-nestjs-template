import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';

/** Cross-Module Imports **/
import { EUserRole } from "../../user";

export const UserRoleGuard = (...roles: EUserRole[]): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest();
      const user = request.user;

      return (user?.roles ?? []).filter(item => roles.includes(item)).length > 0;
    }
  }

  return mixin(RoleGuardMixin);
}
