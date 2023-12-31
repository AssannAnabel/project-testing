import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;
  // let mockedProductsValue= [{ id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 },];
  // let mockProductsService={
  //   products:()=> mockedProductsValue, // es una funcion que nos retorna lo que tiene el mockedProductsValue
  // };
  beforeEach(async () => {
    //mockeando
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
      // .overrideProvider(mockProductsService)// saltear nuestro servicio real
      // .useValue(mockedProductsValue)
      .compile();
    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });
  // en la filmina Mocking aca va la declaracion del test, configuracion del valor que esperamos, mockear el metodo
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Agregamos findAll
  describe('testing over all products (findAll)', () => {
    it('should return all products', () => {
      const allProducts: Product[] = [
        {
          id: '1',
          product_name: 'Martillo',
          description: 'Martillo de carpintero',
          price: 3987,
        },
        {
          id: '2',
          product_name: 'Destornillador',
          description: 'Destornillador Phillips',
          price: 1499,
        },
      ];
      const productSpy = jest
        .spyOn(service, 'findAll')
        .mockReturnValue(allProducts);
      const result = controller.getAllProducts();
      expect(result).toEqual(allProducts);
      productSpy.mockRestore();
    });
  });

  describe('Testing over get element by id (findOne)', () => {
    it('should return the getById (use spyOn)', () => {
      const result = {
        id: '1',
        product_name: 'Martillo',
        description: 'Martillo de carpintero',
        price: 3987,
      };
      const productSpy = jest.spyOn(service, 'findById');
      productSpy.mockImplementation(() => result);
      expect(controller.getProductById('1')).toBe(result);
      productSpy.mockRestore(); // para limpiar
    });
  });

  describe('Testing over create a new product (create)', () => {
    it('should return the create new product (use spyOn)', () => {
      const newProduct = {
        id: '8',
        product_name: 'Amoladora',
        description: 'Amoladora a bateria',
        price: 10456,
      };
      const productSpy = jest
        .spyOn(service, 'create')
        .mockReturnValue(newProduct); //spyOn espia el metodo create del servicio
      const result = controller.createProduct(newProduct); // se llama al metodo del controlador.
      expect(result).toEqual(newProduct);
      productSpy.mockRestore();
    });
  });

  describe('Testing over updated product (update)', () => {
    it('should return the updated product (use spyOn)', () => {
      const updatedProduct: Product = {
        id: '1',
        product_name: 'Martillo Actualizado',
        description: 'Descripción del martillo actualizado',
        price: 150,
      };
      const productSpy = jest
        .spyOn(service, 'update')
        .mockReturnValue(updatedProduct); //mockreturnvalue para establecer el valor que se devolvera cuando se llae al metodo update
      const result = controller.updateProduct('1', updatedProduct); // llama al metodo del controlador
      expect(result).toEqual(updatedProduct); //toEqual que sea igual
      productSpy.mockRestore();
    });
  });

  describe('Testing over delete method (delete)', () => {
    it('should return the deleted product (use spyOn)', () => {
      const deletedProduct: Product = {
        id: '1',
        product_name: 'Martillo',
        description: 'Martillo de carpintero',
        price: 3987,
      };
      const productSpy = jest
        .spyOn(service, 'delete')
        .mockReturnValue(deletedProduct);
      const result = controller.deleteProduct('1');
      expect(result).toEqual(deletedProduct);
      productSpy.mockRestore();
    });
  });
});
