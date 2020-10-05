import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TestController } from './test.controller';

const b64 = (v) => Buffer.from(v).toString('base64');

describe('RequestContextModule suite', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = (
      await Test.createTestingModule({
        controllers: [TestController],
      }).compile()
    ).createNestApplication();
    await app.init();
  });

  it('should decode base64', async () => {
    const value = 'myValue';
    await request(app.getHttpServer()).get('/base64').query({test: b64(value)}).expect(200, value);
  });

  it('should parse json', async () => {
    const value = {my: 'json'};
    await request(app.getHttpServer()).get('/json').query({test: JSON.stringify(value)}).expect(200, value);
  });

  it('should parse base64 encoded json', async () => {
    const value = {my: 'json'};
    await request(app.getHttpServer()).get('/base64json').query({test: b64(JSON.stringify(value))}).expect(200, value);
  });

});
