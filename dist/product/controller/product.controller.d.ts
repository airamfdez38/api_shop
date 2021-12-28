import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';
import { ProductDto } from '../dto/product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findById(uuid: string): Promise<Product>;
    create(dto: ProductDto): Promise<Product>;
    update(product: Product): Promise<Product>;
}
