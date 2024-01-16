import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Store } from "./store.entity"
export enum Rank {
    Silver = 'Silver',
    Bronze = 'Bronze',
    Gold = 'Gold',
}
@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
    })
    id: number

    @Column({
        type: "varchar",
        length: 50
    })
    email: string

    @Column({
        type: "varchar",
        length: 50
    })
    fullName: string


    @Column({
        type: "varchar",
        length: 50
    })
    password: string

    @Column({
        type: "varchar",
    })
    phone: string

    @ManyToOne(() => Store, (store) => store.users)
    storeId: Store

    @Column({
        type: 'enum',
        enum: Rank,
        default: Rank.Bronze
    })
    rank: Rank

    @Column({
        type: "boolean",
        default: false
    })
    isAdmin: boolean
}