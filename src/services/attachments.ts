import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource ,_datasource } from "../includes"
import { Attachment } from "../entity/"
import { AttachedEnity } from "../entity/Attachment";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class AttachmentService {
    private datasource:DataSource=AppDataSource
  constructor (){}

  async all(type?:AttachedEnity):Promise<Attachment[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Attachment,{
        where:{
            forType:type
        }
    })
  }

/* async create(createArticleDto:CreateArticleDto):Promise<Article|void>{
     
    const {article,userid}=createArticleDto
    let _article=<Article>{...article}
    let author=await this.datasource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    _article.author=author
    author.articles.push(_article)
    _article=await this.datasource.manager.save(Article,_article)
    return _article
   
 } */
}
