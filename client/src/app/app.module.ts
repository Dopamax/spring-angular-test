import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlePageComponent } from './Pages/article-page/article-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CreateArticleComponent } from './Components/create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersPageComponent } from './Pages/orders-page/orders-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { ArticleCardComponent } from './Components/article-card/article-card.component';
import { EditOrderComponent } from './Components/edit-order/edit-order.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlePageComponent },
  { path: 'articles/add', component: CreateArticleComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'order/edit/:id', component: EditOrderComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticlePageComponent,
    NavbarComponent,
    CreateArticleComponent,
    OrdersPageComponent,
    HomeComponent,
    ArticleCardComponent,
    EditOrderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
