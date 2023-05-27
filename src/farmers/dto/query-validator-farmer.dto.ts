import { IsOptional } from 'class-validator';

export class QueryValidatorFarmerDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  UniqueRegNumber: string;

  @IsOptional()
  landOwned: number;

  @IsOptional()
  city: string;

  @IsOptional()
  state: string;

  @IsOptional()
  mobileNumber: string;

  @IsOptional()
  page: string;

  @IsOptional()
  limit: string;

  @IsOptional()
  order: string;

  @IsOptional()
  sortBy: string;
}
