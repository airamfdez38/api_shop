import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './entity/user.entity';

@Module({

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
