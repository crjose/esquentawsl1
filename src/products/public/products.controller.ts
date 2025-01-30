import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':slug')
    findOne(Param('slug') slug:string) {
        return this.productsService.findOne(slug);
        }
    }
