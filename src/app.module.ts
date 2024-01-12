import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config';
import { UsersModule } from './models/users/user.module';
import { StoresModule } from './models/stores/store.module';
import { ItemsModule } from './models/items/item.module';
import { OrdersModule } from './models/orders/order.module';

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
