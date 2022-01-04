import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){
    }
    
    async findAll(): Promise<User[]> {
        return await this.userRepository.find()
    }

    async findOne(uuid:string): Promise<User> {
        return await this.userRepository.findOne(uuid);
    }

    async create(dto: UserDto): Promise<User> {
        return await this.userRepository.save(dto);
    }

    async update(user: User):Promise<User> {
        return await this.userRepository.save(user);
    }

    async remove(uuid: string): Promise<DeleteResult> {
        return await this.userRepository.delete(uuid);
    }

}
