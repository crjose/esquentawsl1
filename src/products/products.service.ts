import { Global, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductSlugAlreadyExistsError } from './errors';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {

    const product = await this.prismaService.product.findFirst({
       where: { 
        slug: createProductDto.slug,
       },
    });
    
    if(product) {

      throw new ProductSlugAlreadyExistsError(createProductDto.slug);

    }

    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: string) {
    return this.prismaService.product.findFirst({
      where:{
        id,
      }
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where:{
        id,
      },
      data: updateProductDto,
    })
  }

  remove(id: string) {
    return this.prismaService.product.delete({
      where:{
        id ,
      }
    });
    //`This action removes a #${id} product`;
  }
}
