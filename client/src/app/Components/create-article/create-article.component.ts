import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from 'src/app/Services/Articles/article-service.service';

interface Article{
  name:string,
  price:number

}

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  picture:any;
  upload = new FormData();
  article:Article = {
    name:"",
    price:0,
  };
  constructor(private service : ArticleServiceService,private router :Router) { }

  ngOnInit(): void {
  }

  onSelectPicture(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0]
      this.picture = file;
    }
  }

  createArticle(){
    this.upload.append("picture",this.picture)
    this.upload.append("article",JSON.stringify(this.article))
    //this.service.uploadPicture(this.upload)
    this.service.createArticle(this.upload).subscribe({
      next:r => {
        this.router.navigate(["/articles"]);
      }
    }) 
  }
}
