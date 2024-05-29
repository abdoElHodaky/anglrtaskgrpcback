import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Email } from "./Email"
import { supTicket,Article,Attachment,Address,Verification,Payment ,Purshase} from "../"

@Entity()
@TableInheritance({column:{type:"varchar",name:"type"}})
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

     @Column({nullable:false,default:29808,select:true})
    IDcardNumber: number

    @Column({type: "varchar" ,nullable:true})
    username: string;

    @Column({type: "varchar", nullable:true, select:true})
    passwordHash: string

    @Column(()=>Email)
    email:Email
    
    @Column(()=>Address)
    address:Address
    
    @CreateDateColumn({type:"date"})
    createdAt: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt: Date;
    
    @OneToMany(()=>supTicket,ticket=>ticket.user) tickets:supTicket[]
    @OneToMany(()=>Verification,verification=>verification.user) verifications:Verification[];
    @OneToMany(()=>Attachment,media=>media.uploader) media:Attachment[]
    @OneToMany(()=>Payment,payment=>payment.user) payments:Payment[]
    @OneToMany(()=>Purshase,purchase=>purchase.user) purchases:Purshase[]
    
   
}

