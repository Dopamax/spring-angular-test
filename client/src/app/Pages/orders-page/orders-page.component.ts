import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/Orders/orders.service';
import { Order } from "../../Interfaces/Order"

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  orders:Order[] = []

  constructor(private service:OrdersService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orders = this.service.getOrders()
  }

  createOrder(){
    this.service.createOrder();
  }
}
