import { Entity,Column,ManyToOne,OneToOne,PrimaryGeneratedColumn} from "typeorm"
import { User,Address,Purshase } from "./";

export enum PaymentStatus{
    PAYMENT_DEFAULT="Default",
    PAYMENT_PENDING="Pending",
    PAYMENT_PAID="Paid"
}

@Entity()
export class Payment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

    @Column(/*{type:'timestamptz'}*/)
    date: string;
    
    @Column({type: "varchar", nullable: true})
    status: PaymentStatus;

    @Column({type: "varchar", nullable: true})
    amount: string;

    @Column({type: "varchar", nullable: true})
    currency: string;

    @Column(()=>Address)
    shipping: Address;
    
    @Column({type: "varchar", nullable: true})
    transR: string;

    @OneToOne(()=>Purshase, purchase=>purchase.payment) purchase:Purshase
    @ManyToOne(()=>User,user=>user.payments) user:User;
}
