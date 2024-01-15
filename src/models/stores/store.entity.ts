import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Item } from "../items/item.entity";

@Entity('stores')
export class Store extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    name: string

    @Column({
        type: "varchar",
        nullable: false,
    })
    email: string

    @Column({
        type: "varchar",
        nullable: false
    })
    address: string

    @OneToMany(() => User, (user) => user.storeId)
    users: User[]

    @OneToMany(() => Item, (item) => item.storeId)
    items: Item[]
}