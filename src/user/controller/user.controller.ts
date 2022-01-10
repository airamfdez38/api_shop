import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';


@ApiTags("Users")
@Controller('user')
export class UserController {
    /* constructor(private userService: UserService){

   } */

    @Get()
    findAll(): User[] {
        const user: User[] = [
            {
                id: 1,
                name: "Aitana",
                surname: "Fdez Sanchez",
                email: "aitana@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            },
            {
                id: 2,
                name: "Miriam",
                surname: "Fdez Garrido",
                email: "miriam@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            },
            {
                id: 3,
                name: "Claudia",
                surname: "Fdez Garrido",
                email: "claudia@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            }
        ]
        return user;
    }
    @Get(':uuid')
    findById(@Param('uuid') uuid: string): User {
        return {
            id: 3,
            name: "Claudia",
            surname: "Fdez Garrido",
            email: "claudia@gmail.com",
            phone: "612345678",
            dni: "123456789S",
            isActive: true,
        }
    }
    /*@Post()
    create(@Body() dto: UserDto): Promise<User> {
        return this.userService.create(dto);
    }
    @Put()
    update(@Body() user: User): Promise<User> {
        return this.userService.update(user);
    }
    @Delete(':uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult> {
        return this.userService.remove(uuid)
    } */
}
