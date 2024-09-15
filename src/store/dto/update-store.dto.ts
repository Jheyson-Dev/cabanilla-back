import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateStoreDto } from './create-store.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  // Campos obligatorios
  @Field(() => Int)
  @IsNotEmpty({ message: 'The field areaId cannot be empty.' })
  @IsInt({ message: 'The field areaId must be a valid integer.' })
  areaId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field encargadoId cannot be empty.' })
  @IsInt({ message: 'The field encargadoId must be a valid integer.' })
  encargadoId: number;
}
