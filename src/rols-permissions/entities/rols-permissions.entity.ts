import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Permission } from 'src/permission/entities/permission.entity';
import { Rol } from 'src/rol/entities/rol.entity';

@ObjectType()
export class RolsPermissions {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  rolId: number;

  @Field(() => Int)
  permissionId: number;

  @Field(() => String)
  table: string;

  @Field(() => Permission, { nullable: true })
  permission?: Permission;

  @Field(() => Rol, { nullable: true })
  rol?: Rol;
}
