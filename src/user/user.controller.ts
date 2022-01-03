import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import {UserDto} from './dto/user.dto';


@ApiTags("Users")
@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }
    @Get(':uuid')
    findById(@Param('uuid') uuid:string): Promise<User>{
        return this.userService.findOne(uuid);
    }
    @Post()
    create(@Body() dto: UserDto): Promise<User>{
        return this.userService.create(dto);
    }
    @Put()
    update(@Body() user: User): Promise<User>{
        return this.userService.update(user);
    }
    @Delete('uuid')
    delete(@Param('uuid') uuid: string): Promise<DeleteResult>{
        return this.userService.remove(uuid)
    }
}
