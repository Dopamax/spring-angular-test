import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Interfaces/Article';
import { ArticleServiceService } from 'src/app/Services/Articles/article-service.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles :Article[]=[];

  constructor(private service : ArticleServiceService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.articles =  this.service.getArticles()
    console.log('====================================');
    console.log(this.articles);
    console.log('====================================');
  }
}
