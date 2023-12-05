import { Injectable } from '@nestjs/common';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[]=[]

  constructor(){
    this.generateProducts();
  }

private generateProducts(){ // en memoria
  this.products.push(
    { id: '1', product_name: 'Martillo', description: 'Martillo de carpintero', price: 3987 },
    { id: '2', product_name: 'Destornillador set', description: 'Juego de destornilladores Phillips', price: 9845},
    { id: '3', product_name: 'Sierra Caladora', description: 'Sierra Caladora para corte de madera', price: 19800},
    { id: '4', product_name: 'Cinta Métrica', description: 'Cinta métrica de 5 metros con bloqueo y marca de inicio.', price:1560},
    { id: '5', product_name: 'Taladro Inalámbrico', description: 'Taladro inalámbrico de alta potencia con batería recargable.', price: 20845},
    { id: '6', product_name: 'Llave Ajustable', description: 'Llave Ajustable', price: 4845},
    { id: '7', product_name: 'Soldador de estaño', description: 'Soldador de estaño tipo pìstola 110W Punta Redonda Salkor.', price: 23564},
    
  )
}
  findAll():Product[] {
    return this.products;
  }

  findById(id: string) {
    return this.products.find(product => product.id===id);
  }
  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: string, updatedProduct: Product): Product {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index];
    }
    return null; 
  }

  delete(id: string): Product {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products[index];
      this.products.splice(index, 1);
      return deletedProduct;
    }
    return null; 
  }
}