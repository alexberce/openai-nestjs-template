import { ApiProperty } from "@nestjs/swagger";

export class OpenAiModelsList {
  @ApiProperty()
  id: string;

  @ApiProperty()
  object: string;

  @ApiProperty()
  created: number;

  @ApiProperty()
  owned_by: string;

  @ApiProperty()
  root?: string = null;

  @ApiProperty()
  parent?: string = null;
}
