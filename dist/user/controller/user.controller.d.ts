import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { DeleteResult } from 'typeorm';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findById(uuid: string): Promise<User>;
    create(dto: UserDto): Promise<User>;
    update(user: User): Promise<User>;
    delete(uuid: string): Promise<DeleteResult>;
}
