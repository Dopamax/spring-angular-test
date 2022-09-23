import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/Interfaces/Article';
import { environment } from 'src/environments/environment';
import { APIServiceService } from '../GlobalConstants/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  articles:Article[]=[]

  constructor(private http:HttpClient) { }

  createArticle(article :any){
    this.http.post(environment.apiURL + "articles", article)
    .subscribe()
  }

  getArticles(){
    this.http.get<Article[]>(environment.apiURL + "articles")
    .subscribe({
      next: r => {
        this.articles = r;
      }
    })

    return this.articles;
  }
}
