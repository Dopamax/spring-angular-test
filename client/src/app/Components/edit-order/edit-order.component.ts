import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/Models/Article';
import { Order } from 'src/app/Models/Order';
import { ArticleServiceService } from 'src/app/Services/Articles/article-service.service';
import { OrdersService } from 'src/app/Services/Orders/orders.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  id:string = "";
  articleId:string = "";
  articles:Article[] = [];
  order = new Order();
  article = {id:0, name:"",price:0,picture: ""};
  articlesOfOrder:Article[] = [];
  modeSelection:boolean = false;
  empty:boolean = false;
  constructor(private route:ActivatedRoute,private serviceOrders:OrdersService, private serviceArticle:ArticleServiceService,private navigate:Router) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.id = params.get('id');
      this.getOrder(this.id);
      this.getArticlesOfOrder()

    })
  }

  switchMode(){
    this.modeSelection = !this.modeSelection
    if (this.modeSelection) {
      this.getAllArticles()
    }
  }

  getOrder(id:string){
   
    this.serviceOrders.getOrder(id).subscribe({
      next: res => {
        this.order = res
        this.articlesOfOrder = res.articles;
        if (res.articles.length == 0) {
          this.empty = true
        }
        else{
          this.empty = false;
        }
      }
    })
  }

  getArticlesOfOrder(){
    this.articlesOfOrder = this.order.articles;
  }

  getAllArticles(){
    this.serviceArticle.getArticles().subscribe({
      next : articles => {
        this.articles = articles
      }
    })
  }

  addArticleToOrder(id:number,name:string,price:number,picture:string){
    this.article = {id:id, name:name,price:price,picture: picture}

    this.serviceOrders.editOrder(this.id,this.article).subscribe({
      next: r => {
        this.switchMode()
        this.ngOnInit()
      }
    });  
   
  
  }
}
