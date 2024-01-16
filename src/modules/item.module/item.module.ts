import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemsService } from "./item.service";
import { Item } from "../../models/item.entity";
import { ItemsController } from "./item.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    providers: [ItemsService],
    controllers: [ItemsController],
})
export class ItemsModule { }