import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RolsPermissions {
  @Field(() => Int)
  rolId: number;

  @Field(() => Int)
  permissionId: number;

  @Field(() => String)
  table: string;
}
