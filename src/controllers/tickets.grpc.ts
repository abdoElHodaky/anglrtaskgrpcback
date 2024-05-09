import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Res,  Controller , Get ,Params,Post , Body} from "@decorators/express";
import { Response  } from "express";
import { AuthenticateMiddleware,UserEqulityMiddleware  } from "../middlewares/";
import {Env} from "../env";
const address = "localhost:"+Env.GRP_CPORT

@Controller("/users",[AuthenticateMiddleware])
export class GrpcTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("/:userId/tickets")
  async all(@Res() res:Response,@Params("userId") userId:string):Promise<void>{
    console.log(userId)
    const req:_Ticket.GetAllTicketReq={
      userId:userId
    }
    this.client.all(req,(err:any,resp:any)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
  
  @Post("",[UserEqulityMiddleware])
  async create(@Req() req:Request, @Res() res:Response, @Body() supticket:{type:string,subject:string,description:string}):Promise<void>{
    const {auth}=req
    const empty=isEmpty(supticket)
    try{
    if(empty==false){
    const supticketreq:_Ticket.CreateTicketReq={  
      userId:auth?.id.toString(),
      ticket:_Ticket.Ticket.fromJSON({
        type:supticket.type,
        subject:supticket.subject,
        description:supticket.description
      })
    }
    this.client.create(supticketreq,(err:any,resp:_Ticket.CreateTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
    }
    else{ throw new Error("Argument(s) is/are empty or not existed") }
  }catch(err:any){  
     res.jsonp({message:err?.message})
   }
  }




}
