import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from 'src/app/Models/Article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http:HttpClient) { }

  createArticle(article:any):Observable<Article>{
    return this.http.post<Article>(environment.apiURL + "articles", article)
  }

  getArticles():Observable<Article[]>{
   return this.http.get<Article[]>(environment.apiURL + "articles")
  }
}
