import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DATABASE_DB, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USER } from ".";
import { Item, Order, Store, User } from "src/models";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nestjs',
    entities: [User, Store, Item, Order],
    autoLoadEntities: true,
    synchronize: true,
}
