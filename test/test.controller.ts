import { Controller, Get, Query } from '@nestjs/common';
import { Base64DecodePipe, JsonPipe } from '../src';

@Controller('')
export class TestController {

  @Get('base64')
  base64(@Query('test', Base64DecodePipe) object: any): any {
    return object;
  }

  @Get('json')
  json(@Query('test', JsonPipe) object: any): any {
    return object;
  }

  @Get('base64json')
  base64json(@Query('test', Base64DecodePipe, JsonPipe) object: any): any {
    return object;
  }
}
