import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsMobilePhone,
} from 'class-validator';

export class CreateFarmerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  UniqueRegNumber: string;

  @IsString()
  @IsNotEmpty()
  landOwned: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsMobilePhone()
  @IsNotEmpty()
  mobileNumber: string;
}
