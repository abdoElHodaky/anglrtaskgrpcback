import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Ticket} from "../protos/dist/";
import { supTicketService }from "./";
//import { Service } from "../service.decorator";
//console.log(services)
export class supTicketGrpcService  {
 // @Service("Article")
  static service:any=new supTicketService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Ticket.TicketServiceServer = {
   async all (call: ServerUnaryCall<_Ticket.GetAllTicketReq,_Ticket.GetAllTicketRes>,
    callback: sendUnaryData<_Ticket.GetAllTicketRes>
 ){
     let tickets=await supTicketGrpcService.service.all()
     //console.log(articles)
     let _tickets=tickets.map(_Ticket.Ticket.fromJSON)
     _tickets.forEach((a,inx)=>{   
       a.userId=tickets[inx].user.id
     })
     let res:_Ticket.GetAllTicketRes={articles:_articles,error:{
       Message:"",type:"",name:""
     }}
     callback(null,res)
      }
    , async create (
    call: ServerUnaryCall<_Ticket.CreateTicketReq,_Ticket.CreateTicketRes>,
    callback: sendUnaryData<_Ticket.CreateTicketRes>
  ){
       
     }}

  
    
/*static  async _all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
    callback: sendUnaryData<_Article.GetAllRes>
 ){
  let articles=await this.artclS.all()
  let _articles=articles.map(_Article.Article.fromJSON)
  console.log(_articles)
  }

static  async _create(
    call: ServerUnaryCall<_Article.CreateReq,_Article.CreateRes>,
    callback: sendUnaryData<_Article.CreateRes>
  ){}
    */
 }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
