import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsISO8601, IsNumber } from 'class-validator';
import { MilkProductionProps } from 'src/@core/domain/milk-production/milk-production.entity';

export class CreateMilkProductionDto
  implements Omit<MilkProductionProps, 'farmId'>
{
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsISO8601()
  date: Date;
}
