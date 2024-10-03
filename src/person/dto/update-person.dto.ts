import { CreatePersonDto } from './create-person.dto';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
