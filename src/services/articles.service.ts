import { Injectable } from "@decorators/di";
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource } from "../_datasource";
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
  constructor (){}

  async all():Promise<any>{
    return
  }
}
