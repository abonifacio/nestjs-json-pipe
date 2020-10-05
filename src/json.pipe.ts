import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class JsonPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return JSON.parse(value);
    }catch (e) {
      throw new BadRequestException(e, 'Invalid JSON');
    }
    const json = Buffer.from(value, 'base64').toString('ascii');
  }
}
