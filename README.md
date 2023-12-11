# TP Final Test con NestJS
Proyecto final de Unit Testing, mediante el uso del framework Jest, en el cual el objetivo consiste en implementar pruebas unitarias para un controlador llamado ProductController en una aplicación NestJS, y que todas las funciones en él funcionen correctamente.
El controlador ProductController tiene los siguientes métodos:
-   findAll(): Product[] = Este método debe devolver un arreglo de productos.
-   findById() id:string = Este método debe devolver un producto específico según en ID proporcionado
-   créate(product: Product): Product = Este producto debe crear un nuevo producto y devolverlo.
-   Update(id:string, product: Product): Product = Este método debe actualizar un producto existente según el ID proporcionado y devolver el producto actualizado.
-   Delete(id: string): Product = Este método debe eliminar un producto según el ID proporcionado y devolver el producto eliminado.
Para realizar los test usamos jest.spyOn() para simular el comportamiento de los métodos del servicio y tambien creamos arreglos físicos para probar las funcionalidades del controlador. Además, se incluyeron pruebas para casos de éxito y de error. Se exceptuó del analisis de testeo de los modulos, para que no afecte a la estadistica de covertura
## Instrucciones de Instalación
1.  Clonar el repositorio del proyecto desde  [GitHub](https://github.com/AssannAnabel/project-testing)
2.  Ya en nuestra PC, abrir la terminal de Git, y escribir el comando
> `$ git clone https://github.com/AssannAnabel/project-testing.git`
3. Para descargar todas las dependencias del proyecto, escribir
> `$ npm i`
4. Para tener un analisis del testeo, tipeamos
> `$ npm run test:dev`
5. Y para tener un analisis detallado de la covertura realizada en los testeos, con estadisticas de cada archivo analizado, con
> `$ npm run test:cov`
Se genera una carpeta *(/coverage)* donde se incluye toda la información del testeo realizado.


Integrantes (link al perfil de Linkedin):
> [Anabel Assan](https://www.linkedin.com/in/anabel-assann/)
> [Fabricio Córdoba](https://www.linkedin.com/in/fabricio-cordoba/)
> [Emiliano Salazar](https://www.linkedin.com/in/emiliano-salazar/)