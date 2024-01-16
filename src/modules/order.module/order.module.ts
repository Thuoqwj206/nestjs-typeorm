import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersService } from "./order.service";
import { Order } from "../../models/order.entity";
import { OrdersController } from "./order.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    providers: [OrdersService],
    controllers: [OrdersController],
})
export class OrdersModule { }