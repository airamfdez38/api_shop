import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';
import { ProductDto } from '../dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {
        
    }

    @Get()
    findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid:string): Promise<Product>{
        return this.productService.findOne(uuid);
    }

    @Post()
    create(@Body() dto: ProductDto): Promise<Product>{
        return this.productService.create(dto);
    }

    @Put()
    update(@Body() product: Product): Promise<Product>
}
