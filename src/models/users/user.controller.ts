import { Body, Controller, Get, Param, Post, Put, Req, Request } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get()
    async getAll() {
        return this.userService.findAll()
    }

    @Post()
    async create(@Body() body: UserCreateDTO) {
        const result = await this.userService.create(body)
        if (result) {
            return result
        }
    }

    @Put('/:id')
    async update(@Body() body: UserCreateDTO, @Param('id') id: string) {
        const userId = parseInt(id, 10);
        const updateUser = await this.userService.update(body, userId);
        return updateUser;
    }
}