import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Product[];
    findById(uuid: string): Product;
}
