import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.usersRepository.find();
        if (users) {
            return users
        }
    }

    async findOne(id: number): Promise<{ user?: User, isSuccess: boolean }> {
        const user = await this.usersRepository.findOne({ where: { id: id } })
        if (!user) {
            return { isSuccess: false }
        }
        return { user, isSuccess: true }
    }

    async create(@Body() Body: UserCreateDTO): Promise<User | null> {
        const newUser = await this.usersRepository.create(Body)
        await this.usersRepository.save(newUser)
        return newUser
    }

    async update(@Body() Body: UserCreateDTO, id: number): Promise<{ updatedUser?: User, isSuccess?: boolean }> {
        const user = await this.usersRepository.findOne({ where: { id: id } })
        if (!user) {
            return { isSuccess: false }
        }
        const { username, password, email, phone, rank } = Body
        const updatedUser = await this.usersRepository.save({
            id: id, username, password, email, phone, rank
        })
        return { updatedUser, isSuccess: true }
    }
    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}