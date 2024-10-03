// permission.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Permission {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  descripcion?: string;

  // Define the relationship with RolsPermissions if needed
  // @Field(() => [RolsPermissions])
  // rolsPermissions: RolsPermissions[];
}
