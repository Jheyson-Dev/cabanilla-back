import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateUsersRolsDto } from './create-users-rols.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUsersRolsDto extends PartialType(CreateUsersRolsDto) {}
