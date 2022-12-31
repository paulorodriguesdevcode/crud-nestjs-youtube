import { Module } from '@nestjs/common';
import { ProductsController } from './modules/products/controllers/products.controller';
import { ProductsService } from './modules/products/services/products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
