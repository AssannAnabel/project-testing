import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
//import { Product } from './entities/product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service:ProductsService;

  beforeEach(async () => { //mockeando
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });
// en la filmina Mocking aca va la declaracion del test, configuracion del valor que esperamos, mockear el metodo
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
