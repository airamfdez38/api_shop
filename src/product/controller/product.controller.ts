import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';
import { ProductDto } from '../dto/product.dto';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Products")
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {

    }

    @Get()
    findAll(): Product[] {
        const product: Product[] = [
            {
                uuid: 1,
                name: "producto 1",
                description_short: "descripcion corta",
                description_long: "descripcion larga",
                price: 50,
                stock: 10,
                img_featured: "",
                isActive: true
            }
        ]
        return product;
    }

    @Get(':uuid')
    findById(@Param('uuid') uuid: string): Product {
        const product: Product =
        {
            uuid: 1,
            name: "producto 1",
            description_short: "descripcion corta",
            description_long: "descripcion larga",
            price: 50,
            stock: 10,
            img_featured: "",
            isActive: true
        }

        return product;
    }

    /* @Post()
    create(@Body() dto: ProductDto): Promise<Product> {
        return this.productService.create(dto);
    }

    @Put()
    update(@Body() product: Product): Promise<Product> {
        return this.productService.update(product);
    }

    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.productService.remove(uuid)
    } */
}
