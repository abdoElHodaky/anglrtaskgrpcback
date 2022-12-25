import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { supTicket } from "./supTicket"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({ unique: true })
    username: string;

    @Column()
    passwordHash: string


    @OneToMany(type=>supTicket,ticket=>ticket.user) tickets:supTicket[]

}
