import { DeleteResult, Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { ProductDto } from '../dto/product.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(uuid: string): Promise<Product>;
    create(dto: ProductDto): Promise<Product>;
    update(product: Product): Promise<Product>;
    remove(uuid: string): Promise<DeleteResult>;
}
