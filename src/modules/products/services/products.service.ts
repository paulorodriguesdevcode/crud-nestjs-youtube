import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProduct } from '../dtos';
import { Product } from '../entities';

@Injectable()
export class ProductsService {
  private products:IProduct[]  = [
    {
      "id": 1,
      "name": "laptop",
      "value": 5000,
      "year": 2022
    },
    {
      "id": 2,
      "name": "macbook",
      "value": 15000,
      "year": 2020
    }
  ]

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    return await this.productRepository.find()
  }

  findOne(id: number): IProduct {
    return this.products.find((product) => product.id == id);
  }

  createProduct(product:IProduct): IProduct[] {
    this.products.push(product)
    return this.products;
  }

  updateProduct(id: number, product:IProduct): IProduct[] {
   const position = this.products.findIndex((product) => product.id == id)
   this.products[position] = product
    return this.products;
  }

  delete(id: number): IProduct[] {
    const position = this.products.findIndex((product) => product.id == id)
    this.products.splice(position, 1)
     return this.products;
   }

}

