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

  describe('Testing over findAll', () => {
    // agregamos findAll
    it('should return all products', () => {
      const allProducts: Product[] = [
        { id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 },
        { id: '2', product_name: 'Destornillador', description: 'Destornillador Phillips', price: 1499 }];
      jest.spyOn(productService, 'findAll').mockReturnValue(allProducts);
      const result = productService.findAll();
      expect(result).toEqual(allProducts);
    });
    it('get all products',()=>{
      const mockProduct: Product[] = [
        { id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 },
        { id: '2', product_name: 'Destornillador', description: 'Destornillador Phillips', price: 1499 }]
      const allProducts = productService.findAll()
      expect(allProducts.length).toBe(7);
      expect(allProducts.length).toBeGreaterThan(4);
      jest.spyOn(productService,'findAll').mockImplementationOnce(()=> mockProduct)
      expect(allProducts).not.toContainEqual(mockProduct)
    })
  })

  describe('Testing over findOne', () => {
    // find By ID
    it('should find a product by ID', () => { //validación buscando por id
      const product: Product = productService.findById('1');
      expect(product.id).toBe('1');
    });
  })

  describe('Testing over create', () => {
    // Crear nuevo producto
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
  })

  describe('Testing over update', () => {
    //modificar producto
    it('should update an existing product', () => {
      const updatedProduct: Product = {
        id: '1',
        product_name: 'Martillo Actualizado',
        description: 'Martillo Actualizado',
        price: 5987,
      };
      const result = productService.update('1', updatedProduct);
      expect(result.product_name).toBe('Martillo Actualizado');
    })
    it('should return product not update', () => {
      const updatedProduct: Product = {
        id: '9',
        product_name: 'Martillo con id inexistente',
        description: 'Martillo con id inexistente',
        price: 5987,
      };
      const result = productService.update('9', updatedProduct)
      expect(result).toBeNull()
    })
  })
  
  describe('Testing over delete', () => {
    // eliminar producto
    it('should delete a product by ID', () => {
      const deletedProduct = productService.delete('2');
      expect(deletedProduct.id).toBe('2');
    });
    it('should return null if the product id does not exist', () => {
      const notExistProductId = '999'; // ID que no existe en el arreglo de productos
      const result = productService.delete(notExistProductId);
      expect(result).toBeNull();
    });
  })
});