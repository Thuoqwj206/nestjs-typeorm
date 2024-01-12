import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DATABASE_DB, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USER } from ".";
import { Item, Order, Store, User } from "src/models";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: DATABASE_HOST,
    port: +DATABASE_HOST,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DB,
    schema: 'nestjs',
    entities: [User, Store, Item, Order],
    autoLoadEntities: true,
    synchronize: true,
}
