import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemsService } from "./item.service";
import { Item } from "../../models/item.entity";

@Controller('items')
export class ItemsController {
    constructor(private itemService: ItemsService) { }

    @Get()
    async getAll() {
        return this.itemService.findAll()
    }

    @Post()
    async create(@Body() body: Item) {
        const result = await this.itemService.create(body)
        if (result.isSuccess) {
            return result
        }
    }

    @Put()
    async update(@Body() body: Item, @Param('id') id: string) {
        const itemId = parseInt(id, 10)
        const updateItem = await this.itemService.updateInfo(body, itemId)
        return updateItem
    }

    @Delete()
    async remove(@Param('id') id: string) {
        const itemId = parseInt(id, 10)
        await this.itemService.remove(itemId)
        return 'DOne'
    }
}

