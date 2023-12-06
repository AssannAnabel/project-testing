import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
//import { Product } from './entities/product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service:ProductsService;
  let mockedProductsValue= [{ id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 },];
  let mockProductsService={
    products:()=> mockedProductsValue, // es una funcion que nos retorna lo que tiene el mockedProductsValue
  };

  beforeEach(async () => { //mockeando
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
    .overrideProvider(mockProductsService)// saltear nuestro servicio real
    .useValue(mockedProductsValue) 
    .compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });
// en la filmina Mocking aca va la declaracion del test, configuracion del valor que esperamos, mockear el metodo
 
  it('should be defined', () => {
  expect(controller).toBeDefined();
});


  it("should return the getById (use spyOn)",
   () =>{
    const result={ id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 }
    const productSpy=jest.spyOn(service,"findById");
    productSpy.mockImplementation(() =>result);
    expect(controller.getProductById("1")).toBe(result);
    productSpy.mockRestore();
  });

  it("should return the create new product (use spyOn)",
  () =>{
   const newProduct={id:'8',product_name: 'Amoladora', description: 'Amoladora a bateria', price:10456 };
   const productSpy=jest.spyOn(service,"create").mockReturnValue(newProduct);//spyOn espia el metodo create del servicio
   const result=controller.createProduct(newProduct)
   expect(result).toEqual(newProduct);
   productSpy.mockRestore();
 });


 

});
