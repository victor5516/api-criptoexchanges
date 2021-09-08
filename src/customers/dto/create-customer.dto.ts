import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
    isEmail,
  } from 'class-validator';
  import { PartialType, ApiProperty } from '@nestjs/swagger';

  export class CreateCustomerDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `customer's name` })
    readonly first_name: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly last_name: string;

    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `customer's name` })
    readonly password: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly document_id: string;

        
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;
  
    @IsUrl()
    @IsNotEmpty()
    @ApiProperty()
    readonly profile_url: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly phone: string;
  
  
  

}
