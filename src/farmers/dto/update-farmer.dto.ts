import {
  IsEmail,
  IsString,
  IsNumber,
  IsOptional,
  Length,
  Min,
  Max,
} from 'class-validator';

export class UpdateFarmerDto {
  @IsString()
  @IsOptional()
  @Length(3, 50)
  name?: string;

  @IsEmail()
  @IsOptional()
  @Length(3, 50)
  email?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(5000)
  landOwned?: number;

  @IsString()
  @IsOptional()
  @Length(3, 50)
  city?: string;

  @IsString()
  @IsOptional()
  @Length(3, 50)
  state?: string;
}
