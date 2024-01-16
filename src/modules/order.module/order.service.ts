import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../../models/order.entity";
import { Repository } from "typeorm";
import { Injectable, Body } from "@nestjs/common";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) { }

    async findAll(): Promise<{ orders?: Order[], isSuccess?: boolean }> {
        const orders = await this.orderRepository.find()
        if (!orders) {
            return { isSuccess: false }
        }
        return { orders, isSuccess: true }
    }

    async findOne(id: number): Promise<{ order?: Order, isSuccess: boolean }> {
        const order = await this.orderRepository.findOne({ where: { id: id } })
        if (!order) {
            return { isSuccess: false }
        }
        return { order, isSuccess: true }
    }

    async create(@Body() body: Order): Promise<{ order?: Order, isSuccess: boolean }> {
        const order = await this.orderRepository.create(body)
        await order.save()
        return { order, isSuccess: true }
    }

    async remove(id: number): Promise<void> {
        await this.orderRepository.delete(id);
    }
}

