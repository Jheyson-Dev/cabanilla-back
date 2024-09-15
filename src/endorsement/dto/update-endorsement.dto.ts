import { InputType, PartialType } from '@nestjs/graphql';
import { CreateEndorsementDto } from './create-endorsement.dto';

@InputType()
export class UpdateEndorsementDto extends PartialType(CreateEndorsementDto) {}
