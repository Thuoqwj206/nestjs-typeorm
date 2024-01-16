import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config';
import { UsersModule } from './modules/user.module/user.module';
import { StoresModule } from './modules/store.module/store.module';
import { ItemsModule } from './modules/item.module/item.module';
import { OrdersModule } from './modules/order.module/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    StoresModule,
    ItemsModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
