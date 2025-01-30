import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UsePipes,
} from '@nestjs/common';
import { AdminProductsService } from './admin-products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('admin/products')
export class AdminProductsController {
  constructor(private readonly adminProductsService: AdminProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.adminProductsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.adminProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminProductsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.adminProductsService.update(id, updateProductDto);
  }
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminProductsService.remove(id);
  }
}
