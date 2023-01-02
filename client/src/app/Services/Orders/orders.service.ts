import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Article, ArticleDTO } from 'src/app/Models/Article';
import { Order, OrderDTO } from 'src/app/Models/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  newOrder:OrderDTO = {reference:"",date:new Date(),articles:[]}
 
  constructor(private http:HttpClient) { }

  createOrder():Observable<Order>{
    return this.http.post<Order>(environment.apiURL + "orders",this.newOrder)
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(environment.apiURL + "orders")
  }

  getOrder(id:string):Observable<Order>{
    return this.http.get<Order>(environment.apiURL + "orders/" + id)
  }

  editOrder(id:string,article:Article):Observable<Order>{
   return this.http.put<Order>(environment.apiURL + "orders/" + id, article)
  }

  getArticle(id:string):Observable<Article>{
   return this.http.get<Article>(environment.apiURL + "articles/" + id)
  }
}
