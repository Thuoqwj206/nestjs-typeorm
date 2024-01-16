import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser from 'body-parser';
import { DATABASE_PASSWORD, DATABASE_PORT } from './config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
declare const module: any;
import { resolve } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'))
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();