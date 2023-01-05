import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProduct } from '../dtos';
import { Product } from '../entities';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    return await this.productRepository.find()
  }

  async findOne(id: number): Promise<IProduct> {
    return await this.productRepository.findOne({
      where : {
        id
      }
    })
  }

  async createProduct(product:IProduct): Promise<IProduct> {
    return await this.productRepository.save(product)
  }

  async updateProduct(id: number, product:IProduct) {
    return await this.productRepository.update({id}, product)
  }

  async delete(id: number) {
    return await this.productRepository.delete({id})
   }
}

