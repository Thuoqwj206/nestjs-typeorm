import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StoresService } from "./store.service";
import { Store } from "../../models/store.entity";

@Controller('stores')
export class StoresController {
    constructor(private storeService: StoresService) { }

    @Get()
    async getAll() {
        return this.storeService.findAll()
    }

    @Post()
    async create(@Body() body: Store) {
        const result = await this.storeService.create(body)
        if (result.isSuccess) {
            return result
        }
    }

    @Put()
    async update(@Body() body: Store, @Param('id') id: string) {
        const storeId = parseInt(id, 10)
        const updateStore = await this.storeService.updateInfo(body, storeId)
        return updateStore
    }

    @Delete()
    async remove(@Param('id') id: string) {
        const storeId = parseInt(id, 10)
        await this.storeService.remove(storeId)
        return 'DOne'
    }
}

