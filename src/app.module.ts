import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './modules/products/entities';
import { ProductsModule } from './modules/products/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'root',
      password: 'root',
      database: 'db-test',
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}