import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(uuid: string): Promise<User>;
    create(dto: UserDto): Promise<User>;
    update(user: User): Promise<User>;
    remove(uuid: string): Promise<DeleteResult>;
}
