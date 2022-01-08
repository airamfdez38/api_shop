import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn("uuid")
    uuid: string;
    @Column()
    name: string;
    @Column()
    description_short: string;
    @Column()
    description_long: string;
    @Column()
    price: number;
    @Column()
    stock: number;
    
    @Column({type: 'longtext'})
    img_featured: string;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}