import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controllers/';
import { Product } from './entities';
import { ProductsService } from './services/';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [TypeOrmModule]
})
export class ProductsModule {}