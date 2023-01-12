import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CodeCompletionDto {
  @IsString()
  @MinLength(10)
  @MaxLength(20000)
  @ApiProperty({ example: 'Write a JavaScript function that sorts an array' })
  prompt: string;
}
