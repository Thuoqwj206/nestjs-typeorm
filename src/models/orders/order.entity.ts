import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Item } from "../items/item.entity";

@Entity('orders')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "float",
        nullable: false
    })
    totalPrice: number

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @ManyToMany(
        () => Item,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
    @JoinTable({
        name: 'order_item',
        joinColumn: {
            name: 'order_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'item_id',
            referencedColumnName: 'id',
        },
    })
    items: Item[]
}