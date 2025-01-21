import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSlugAlreadyExistsError } from './products/errors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalFilters(ProductSlugAlreadyExistsErrorFilter());



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
