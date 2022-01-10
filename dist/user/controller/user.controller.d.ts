import { User } from '../entity/user.entity';
export declare class UserController {
    findAll(): User[];
    findById(uuid: string): User;
}
