/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AuthProvider as PrismaAuthProvider } from "@prisma/client";

export class AuthProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuthProviderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.authProvider.count(args);
  }

  async authProviders(
    args: Prisma.AuthProviderFindManyArgs
  ): Promise<PrismaAuthProvider[]> {
    return this.prisma.authProvider.findMany(args);
  }
  async authProvider(
    args: Prisma.AuthProviderFindUniqueArgs
  ): Promise<PrismaAuthProvider | null> {
    return this.prisma.authProvider.findUnique(args);
  }
  async createAuthProvider(
    args: Prisma.AuthProviderCreateArgs
  ): Promise<PrismaAuthProvider> {
    return this.prisma.authProvider.create(args);
  }
  async updateAuthProvider(
    args: Prisma.AuthProviderUpdateArgs
  ): Promise<PrismaAuthProvider> {
    return this.prisma.authProvider.update(args);
  }
  async deleteAuthProvider(
    args: Prisma.AuthProviderDeleteArgs
  ): Promise<PrismaAuthProvider> {
    return this.prisma.authProvider.delete(args);
  }
}
