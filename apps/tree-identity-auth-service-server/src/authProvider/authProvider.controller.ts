import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthProviderService } from "./authProvider.service";
import { AuthProviderControllerBase } from "./base/authProvider.controller.base";

@swagger.ApiTags("authProviders")
@common.Controller("authProviders")
export class AuthProviderController extends AuthProviderControllerBase {
  constructor(
    protected readonly service: AuthProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
