import { kMaxLength } from "buffer";
import { IS_NOT_EMPTY, IS_NUMBER, IS_STRING, IsNotEmpty, isNotEmpty, isNotEmptyObject, IsNumber, isNumber, IsString, Matches, MaxLength, Min } from "class-validator";
import { isString } from "util";

export class CreateProductDto {

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^[a-z0-9-]+$/,{
    message:'Slug can only contain lowercase letters, numbers and dashes',
  })
  @IsNotEmpty()  
  @IsString()
  slug: string; 

  @MaxLength(500)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Min(1)
  @IsNumber({maxDecimalPlaces: 2})
  @IsNotEmpty()
  price: number;
}
