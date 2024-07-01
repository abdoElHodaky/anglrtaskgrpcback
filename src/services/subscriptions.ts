
import { _Data } from "./datasource";
import { Subscription,Subscriber } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { services} from "./enum";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class SubscriptionService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Subscription[]|Error>
  {
  
    const orgzs= await this.em.find(Subscription,{
      where:(userId!=undefined)?{owner:{id:userId}}:{},
      relations:{
        owner:true
      },
      cache:true
    })
    return (orgzs.length!=0)? orgzs : new NotFoundError("Subscription")
  }

async create(userId:number,orgz:{type:string,title:string,description:string}):Promise<Orgz|void>{
   let user= await services.User.id(userId) 
   if(user instanceof User) user = user as Owner

   const _orgz=await this.em.create(Orgz,{
      ...orgz
    })
   
   _orgz.owner=user
   return _orgz
    
    
    
 }
}