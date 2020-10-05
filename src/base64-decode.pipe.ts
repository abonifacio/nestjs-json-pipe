import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class Base64DecodePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return Buffer.from(value, 'base64').toString('ascii');
    } catch (e) {
      throw new BadRequestException(e, 'Invalid base64');
    }
  }
}
