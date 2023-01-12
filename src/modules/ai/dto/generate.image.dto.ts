import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class GenerateImageDto {
  @IsString()
  @MinLength(10)
  @MaxLength(20000)
  @ApiProperty({ example: 'A cat standing playing with a ball on a beach' })
  prompt: string;
}
