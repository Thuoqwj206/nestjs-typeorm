
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { User } from '../../models/user.entity';
import { UsersController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule { }