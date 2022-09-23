import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Article, ArticleDTO } from 'src/app/Interfaces/Article';
import { Order, OrderDTO } from 'src/app/Interfaces/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  newOrder:OrderDTO = {reference:"",date:new Date(),articles:[]}
  articles :Article[] = []
  orders:Order[]=[]
  order:Order = {id:0,reference:"",date:new Date(),articles:[]};
  articlesOfAnOrder :Article[] = []
  article:Article = {id:0,name:"", price:0,picture:""}
  constructor(private http:HttpClient) { }

  createOrder(){
    this.http.post(environment.apiURL + "orders",this.newOrder)
    .subscribe()
  }

  getOrders(){
    this.http.get<Order[]>(environment.apiURL + "orders")
    .subscribe({
      next: r => {
        this.orders = r;
      }
    })
    return this.orders;
  }

  getOrder(id:string){
    this.http.get<Order>(environment.apiURL + "orders/" + id)
    .subscribe({
      next: r => {
        this.order = r;
      }
    })
    return this.order;
  }

  editOrder(id:string,article:Article){
    this.http.put<Order>(environment.apiURL + "orders/" + id, article)
    .subscribe({
      next: r =>{
        console.log('====================================');
        console.log(r);
        console.log('====================================');
      }
    })
  }

  getArticle(id:string){
    this.http.get<Article>(environment.apiURL + "articles/" + id)
    .subscribe({
      next:r => {
        this.article = r;
      }
    })
    return this.article;
  }
}
