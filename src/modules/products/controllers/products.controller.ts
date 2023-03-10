import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IProduct } from '../dtos';
import { ProductsService } from '../services/';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  findAll():Promise<IProduct[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<IProduct> {
    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() product: IProduct): Promise<IProduct> {
    return this.productsService.createProduct(product)
  }

  @Put(':id')
  updateProduct(
    @Body() product: IProduct,
    @Param('id') id: number) {
    return this.productsService.updateProduct(id, product)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }


}
