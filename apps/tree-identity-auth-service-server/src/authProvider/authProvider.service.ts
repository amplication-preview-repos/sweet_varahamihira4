import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthProviderServiceBase } from "./base/authProvider.service.base";

@Injectable()
export class AuthProviderService extends AuthProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
