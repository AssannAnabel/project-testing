import { Controller, Get, Post,Put, Param,Body, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    return this.productsService.findById(id);
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.productsService.create(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() updatedProduct: Product): Product {
    return this.productsService.update(id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Product {
    return this.productsService.delete(id);
  }
}
