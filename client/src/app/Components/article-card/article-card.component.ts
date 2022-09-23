import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() name = "";
  @Input() price = "";
  @Input() picture = "";
  uploadFolder = environment.uploads
  constructor() { }

  ngOnInit(): void {
  }

}
