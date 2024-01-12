import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { Order } from "./order.entity";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) { }

    @Get()
    async getAll() {
        return this.orderService.findAll()
    }

    @Post()
    async create(@Body() body: Order) {
        const result = await this.orderService.create(body)
        if (result.isSuccess) {
            return result
        }
    }

    @Delete()
    async remove(@Param('id') id: string) {
        const orderId = parseInt(id, 10)
        await this.orderService.remove(orderId)
        return 'DOne'
    }
}

