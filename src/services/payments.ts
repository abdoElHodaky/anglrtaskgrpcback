import { _Data } from "./datasource";
import { Payment,User} from "../entity/"
import { PaymentStatus} from "../entity/Payment";
import { CreatePaymentDto } from "../dto/create-payment.dto"
import { PayTabService } from "./";
import { NotFoundError ,Error ,TypeError } from "common-errors";
import { isNumeric } from "../helpers";
//@Injectable()
export class PaymentService extends _Data {
 // @service("PayTabGate")
  private payTabService=new PayTabService()
  constructor (){
      super()
     // this.payTabService.start()
  }

  async all(userId:number):Promise<Payment[]|Error>
  {
 //  if(isNumeric(userId)==true){
    try
  {
    let payments= await this.datasource.manager.find(Payment,{
      where: { user: { id: userId } }})
     if (payments.length!=0) return payments
     else throw new NotFoundError("Payments")
  }
    catch(err:any){
      // console.log(err)
       return err
      }
  // }
 //  else return new TypeError("userId should be number")
  }

 async create(createPaymentDto: CreatePaymemtDto):Promise<Payment|void>{
     
   /* const {purshasedItem,userid}=createPaymentDto
    let payment=await this.datasource.manager.create(Payment,purchasedItem)
    return payment */
   
 }

async pay(paymentId:string,urls:{callback:string,return:string}){
  let payment = await  this.datasource.manager.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
  return await this.payTabService.createPage(payment,urls)

 }

async payCallback(result:any):Promise<any>{
   return await this.payTabService.payCallback(result)
}

async verify(transR:string,paymentId:string):Promise<any>{
    let res= await this.payTabService.payVerify(transR)
    let { valid,code }=res
    if (valid===true){
      let payment=await this.datasource.manager.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
      payment.status=PaymentStatus.PAYMENT_PAID
      payment.transR=transR
      await this.datasource.manager.save(Payment,payment)
      return {message:"Payment success , Thanks"}

    }
    else{
      return res
    }
    
  }

  
}
