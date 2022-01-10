import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    dni: string;
    @Column({ default: true })
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}