import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ProductSlugAlreadyExistsError } from '../errors';
import { ProductSlugAlreadyExistsError } from './products/errors';
//import {ProductSlugAlreadyExistsErrorFilter} from '../products/filters';
import { ProductSlugAlreadyExistsErrorFilter } from './products/filters/product-slug-already.exists.filter';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './common/filters/not-found-error.filter';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { FILTER_CATCH_EXCEPTIONS } from '@nestjs/common/constants';
import { error } from 'console';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ProductSlugAlreadyExistsErrorFilter(), new NotFoundErrorFilter());

  /* app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  ); */

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
