import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controller/product.controller';
import { Product } from './entity/product.entity';
import { ProductService } from './service/product.service';

@Module({

  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
