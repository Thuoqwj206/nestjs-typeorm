import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "../stores/store.entity";

@Entity('items')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false
    })
    name: string

    @Column({
        type: "int",
    })
    quantity: number

    @Column({
        type: 'varchar',
    })
    type: string

    @Column({
        type: 'float',
    })
    price: number

    @ManyToOne(() => Store, (store) => store.id)
    storeId: Store
}