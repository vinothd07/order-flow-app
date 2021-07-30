import { Injectable } from '@angular/core';
import { OrdersFakeDb } from '../fake_db/fake_db.dataset';
import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  _fakeDB: Orders[] = OrdersFakeDb.orders;

  constructor() {
  }

  getall(): Orders[] {
    return this._fakeDB;
  }

  updateOrder(orders){
    this._fakeDB = orders;
    OrdersFakeDb.orders = this._fakeDB;
  }

}
