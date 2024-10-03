import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Rol } from 'src/rol/entities/rol.entity';

@ObjectType()
export class UsersRols {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  rolId: number;

  @Field(() => String, { nullable: true })
  descripcion?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Rol, { nullable: true })
  rol?: Rol;
}
