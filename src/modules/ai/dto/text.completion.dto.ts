import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class TextCompletionDto {
  @IsString()
  @MinLength(10)
  @MaxLength(20000)
  @ApiProperty({ example: 'How are you today?' })
  prompt: string;
}
