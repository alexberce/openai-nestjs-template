import { ApiProperty } from "@nestjs/swagger";

export type ImageObject = {
  src: string;
}

export class OpenAiImageResponse {
  @ApiProperty()
  id: string;

  data: ImageObject[]
}
