import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthProviderModuleBase } from "./base/authProvider.module.base";
import { AuthProviderService } from "./authProvider.service";
import { AuthProviderController } from "./authProvider.controller";
import { AuthProviderResolver } from "./authProvider.resolver";

@Module({
  imports: [AuthProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthProviderController],
  providers: [AuthProviderService, AuthProviderResolver],
  exports: [AuthProviderService],
})
export class AuthProviderModule {}
