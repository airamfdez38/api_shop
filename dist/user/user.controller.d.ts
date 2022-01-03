import { DeleteResult } from 'typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findById(uuid: string): Promise<User>;
    create(dto: UserDto): Promise<User>;
    update(user: User): Promise<User>;
    delete(uuid: string): Promise<DeleteResult>;
}
