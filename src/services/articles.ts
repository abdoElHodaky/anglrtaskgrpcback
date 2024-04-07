import { Injectable , Inject } from "@decorators/di";
import { DataSource } from "typeorm"
import { Article,User,Author } from "../entity/"
//import { _datasourceInject } from "../data-source";
import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ArticleService {
  private readonly datasource: DataSource
  constructor (){}

  async all():Promise<Article[]>{
    let articles=await this.datasource.manager.find(Article)
    return articles
  }
}
