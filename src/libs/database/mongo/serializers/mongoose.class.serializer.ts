import { Document } from 'mongoose';
import { ClassTransformOptions, plainToClass } from 'class-transformer';
import { ClassSerializerInterceptor, PlainLiteralObject, Type } from '@nestjs/common';

export function MongooseClassSerializer(
  classToIntercept: Type
): typeof ClassSerializerInterceptor {
  return class Interceptor extends ClassSerializerInterceptor {
    private changePlainObjectToClass(document: PlainLiteralObject) {
      if (!(document instanceof Document)) {
        return document;
      }

      return plainToClass(classToIntercept, document.toJSON());
    }

    private prepareResponse(
      response: PlainLiteralObject | PlainLiteralObject[]
    ) {
      if (Array.isArray(response)) {
        return response.map(this.changePlainObjectToClass);
      }

      return this.changePlainObjectToClass(response);
    }

    serialize(
      response: PlainLiteralObject | PlainLiteralObject[],
      options: ClassTransformOptions
    ) {
      return super.serialize(this.prepareResponse(response), options);
    }
  };
}
