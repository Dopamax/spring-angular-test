import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/Article'
import { ArticleServiceService } from 'src/app/Services/Articles/article-service.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles:Article[] = [];

  constructor(private service : ArticleServiceService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.service.getArticles().subscribe({
      next: res => {
        this.articles = res
      }
    })
  }
}
