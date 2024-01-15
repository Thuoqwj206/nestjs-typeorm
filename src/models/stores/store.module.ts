import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoresService } from "./store.service";
import { Store } from "./store.entity";
import { StoresController } from "./store.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Store])],
    providers: [StoresService],
    controllers: [StoresController],
})
export class StoresModule { }