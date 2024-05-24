import { Router } from "express";
import { Attachment } from "../entity/Attachment";
import { AppDataSource } from "../_datasource";
import { booksroute } from "./bookroutes";

export const attachmentsroute=Router()

attachmentsroute.get("/attachments",(req,res)=>{
    /* 	#swagger.tags = ['Grpc.Attachment']
        #swagger.description = 'Endpoint to get attachments' 
        
    
    */
    
    AppDataSource.manager.find(Attachment).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})
attachmentsroute.use(booksroute)
