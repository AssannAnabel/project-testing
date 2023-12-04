import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

describe('ProductsService', () => {
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile(); // INstanciar producsService = new ProductsService

    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();//validación automática que existe
  });

  it('should find a product by ID', () =>{ //validación buscando por id
    const product:Product = productService.findById('1');
    expect(product.id).toBe('1');
  });
});
