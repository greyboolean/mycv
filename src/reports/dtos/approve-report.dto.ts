import { IsBoolean } from 'class-validator';

export class ApprovedReprotDto {
  @IsBoolean()
  approved: boolean;
}
