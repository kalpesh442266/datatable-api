import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsMobilePhone,
  IsNumber,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CreateFarmerDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsEmail()
  @IsOptional()
  @Length(3, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  uniqueRegNumber: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(2000)
  landOwned: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  city: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  state: string;

  @IsMobilePhone()
  @IsNotEmpty()
  @Length(10)
  mobileNumber: string;
}
