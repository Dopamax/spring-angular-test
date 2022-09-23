import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article } from 'src/app/Interfaces/Article';
import { Order } from 'src/app/Interfaces/Order';
import { OrdersService } from 'src/app/Services/Orders/orders.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  id:string = "";
  articleId:string = "";
  articles :Article[] = [];
  order:Order = {id:0,reference:"",date:new Date(),articles:[]};
  article: Article = {id:0, name:"",price:0,picture: ""};
  articlesOfOrder:Article[] = [];

  constructor(private route:ActivatedRoute,private service:OrdersService) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.id = params.get('id');
      this.getOrder(this.id);
      this.getArticlesOfOrder()
    })
  }

  getOrder(id:string){
    this.articlesOfOrder = [];
    this.order = this.service.getOrder(id);
  }

  getArticlesOfOrder(){
    this.articlesOfOrder = this.order.articles;
  }

  async editOrder(){
   
    this.article = await this.service.getArticle(this.articleId);
    await this.service.editOrder(this.id,this.article);  
  
  }
}
