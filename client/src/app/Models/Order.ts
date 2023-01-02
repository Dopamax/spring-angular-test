import { Article } from "./Article";

export class Order{
    id:number = 0;
    reference:string = "";
    articles:Article[] = [];
    date:Date = new Date();
}

export class OrderDTO{
    reference:string = "";
    articles:Article[] = [];
    date:Date = new Date();
}