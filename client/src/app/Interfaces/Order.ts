import { Article } from "./Article";

export interface Order{
    id:number;
    reference:string;
    articles:Article[];
    date:Date;
}

export interface OrderDTO{
    reference:string;
    articles:Article[];
    date:Date;
}