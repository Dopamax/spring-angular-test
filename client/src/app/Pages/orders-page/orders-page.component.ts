import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from 'src/app/Services/Orders/orders.service';
import { Order } from "../../Models/Order"

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
    this.service.getOrders().subscribe({
      next : res => {
        this.orders = res
      }
    })
  }

  createOrder(){
    this.service.createOrder().subscribe({
      next: r => {
         this.ngOnInit();
      }
    });
  }
}
