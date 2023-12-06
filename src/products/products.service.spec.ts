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

  it('should create a new product', () => {
    const newProduct: Product = {
      id: '9',
      product_name: 'juego de tubos',
      description: 'juego de 10 tubos, con diferentes medidas ',
      price: 9865,
    };
    const createdProduct = productService.create(newProduct);
    expect(createdProduct.id).toBe('9');
  });

  it('should update an existing product', () => {
    const updatedProduct: Product = {
      id: '1',
      product_name: 'Martillo Actualizado',
      description: 'Martillo Actualizado',
      price: 5987,
    };
    const result = productService.update('1', updatedProduct);
    expect(result.product_name).toBe('Martillo Actualizado');
  });

  it('should delete a product by ID', () => {
    const deletedProduct = productService.delete('2');
    expect(deletedProduct.id).toBe('2');
  });
});
