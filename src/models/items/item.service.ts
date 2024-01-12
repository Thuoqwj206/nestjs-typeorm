import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./item.entity";
import { Repository } from "typeorm";
import { Injectable, Body } from "@nestjs/common";

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>,
    ) { }

    async findAll(): Promise<{ items?: Item[], isSuccess?: boolean }> {
        const items = await this.itemRepository.find()
        if (!items) {
            return { isSuccess: false }
        }
        return { items, isSuccess: true }
    }

    async findOne(id: number): Promise<{ item?: Item, isSuccess: boolean }> {
        const item = await this.itemRepository.findOne({ where: { id: id } })
        if (!item) {
            return { isSuccess: false }
        }
        return { item, isSuccess: true }
    }

    async create(@Body() body: Item): Promise<{ item?: Item, isSuccess: boolean }> {
        const item = await this.itemRepository.create(body)
        await item.save()
        return { item, isSuccess: true }
    }

    async updateInfo(@Body() Body: Item, id: number): Promise<{ updatedItem?: Item, isSuccess?: boolean }> {
        const item = await this.itemRepository.findOne({ where: { id: id } })
        if (!item) {
            return { isSuccess: false }
        }
        const { name, quantity, type, price } = Body
        const updatedItem = await this.itemRepository.save({
            id: id, name, quantity, type, price
        })
        return { updatedItem, isSuccess: true }
    }

    async remove(id: number): Promise<void> {
        await this.itemRepository.delete(id);
    }
}

