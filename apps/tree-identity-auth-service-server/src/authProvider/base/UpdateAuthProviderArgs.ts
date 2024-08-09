/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthProviderWhereUniqueInput } from "./AuthProviderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AuthProviderUpdateInput } from "./AuthProviderUpdateInput";

@ArgsType()
class UpdateAuthProviderArgs {
  @ApiProperty({
    required: true,
    type: () => AuthProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthProviderWhereUniqueInput)
  @Field(() => AuthProviderWhereUniqueInput, { nullable: false })
  where!: AuthProviderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AuthProviderUpdateInput,
  })
  @ValidateNested()
  @Type(() => AuthProviderUpdateInput)
  @Field(() => AuthProviderUpdateInput, { nullable: false })
  data!: AuthProviderUpdateInput;
}

export { UpdateAuthProviderArgs as UpdateAuthProviderArgs };
