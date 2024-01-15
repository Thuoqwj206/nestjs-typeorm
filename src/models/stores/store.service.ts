import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "./store.entity";
import { Repository } from "typeorm";

@Injectable()
export class StoresService {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository<Store>,
    ) { }

    async findAll(): Promise<{ stores?: Store[], isSuccess?: boolean }> {
        const stores = await this.storeRepository.find()
        if (!stores) {
            return { isSuccess: false }
        }
        return { stores, isSuccess: true }
    }

    async findOne(id: number): Promise<{ store?: Store, isSuccess: boolean }> {
        const store = await this.storeRepository.findOne({ where: { id: id } })
        if (!store) {
            return { isSuccess: false }
        }
        return { store, isSuccess: true }
    }

    async create(@Body() body: Store): Promise<{ store?: Store, isSuccess: boolean }> {
        const store = await this.storeRepository.create(body)
        await store.save()
        return { store, isSuccess: true }
    }

    async updateInfo(@Body() Body: Store, id: number): Promise<{ updatedStore?: Store, isSuccess?: boolean }> {
        const store = await this.storeRepository.findOne({ where: { id: id } })
        if (!store) {
            return { isSuccess: false }
        }
        const { name, address, email } = Body
        const updatedStore = await this.storeRepository.save({
            id: id, name, email, address
        })
        return { updatedStore, isSuccess: true }
    }

    async remove(id: number): Promise<void> {
        await this.storeRepository.delete(id);
    }
}