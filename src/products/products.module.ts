import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})

export class ProductsModule implements OnModuleInit {
  constructor(
    private prismaService: PrismaService ,
    private productsService: ProductsService,
  ) {}

  async onModuleInit() {
    
    const products = new Array(10).fill(0).map((_, index) => index + 1);
    

    await this.prismaService.product.deleteMany();

    for (const productIndex of products) {
       await this.productsService.create({
        name: `Product ${productIndex}`,
        slug: `Product-${productIndex}`,
        description: `Description of products ${productIndex}`,
        price: productIndex * 100,
      });
    }
  }

  /* async onModuleInit() {
    const products = new Array(10).fill(0).map((_, index) => index + 1);

    await this.prismaService.product.deleteMany();

    for (const productIndex of products) {
      await this.productsService.create({
        name: `Product ${productIndex}`,
        slug: `product-${productIndex}`,
        description: `Product ${productIndex}`,
        price: productIndex * 100,
      });
    }
  } */
}
