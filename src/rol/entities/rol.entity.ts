import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { RolsPermissions } from 'src/rols-permissions/entities/rols-permissions.entity';

@ObjectType()
export class Rol {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => [RolsPermissions], { nullable: true })
  RolsPermissions?: RolsPermissions[];
}
