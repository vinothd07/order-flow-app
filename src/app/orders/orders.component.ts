import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Orders } from '../models/orders.model';

import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  // Declaring variables
  orders: Orders[] = [];
  open: Orders[] = [];
  wip: Orders[] = [];
  ready: Orders[] = [];
  payment: Orders[] = []
  serachData: string = '';

  // Dependency injection
  constructor(private _service: OrdersService) { }

  ngOnInit(): void {
    this._getAllOrders();         //Get all orders
  }

  _getAllOrders() {
    this.orders = this._service.getall();               // Fetch datas from getall function in service
    this._assignArrayToCards(this.orders);              // Pass the datas to _assignArrayToCards function
  }

  // Filter datas based on state/status
  _assignArrayToCards(orders) {
    this.open = orders.filter(x => x.state.state == 'Open');
    this.wip = orders.filter(x => x.state.state == 'WIP');
    this.ready = orders.filter(x => x.state.state == 'Ready');
    this.payment = orders.filter(x => x.state.state == 'Payment');
  }

  // drap and drop event
  drop(event: CdkDragDrop<string[]>) {
    let dropedItem: any = event.previousContainer.data[event.previousIndex];      // get droped item
    this._updateOrder(dropedItem._id, dropedItem.state.state);        // update to fake db json

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  // update order status to temporary fake json db
  _updateOrder(_id, state) {
    let _index = this.orders.findIndex(item => item._id == _id);
    this.orders[_index].state.state = (state == 'Open' ? 'WIP' : (state == 'WIP' ? 'Ready' : 'Payment'));

    // update to fake db json
    this._service.updateOrder(this.orders);
  }

  // search data based on customer name/whatsapp number/reg no.
  _search(key) {
    if (!key) { this._getAllOrders(); return; };
    let orders = this.orders.filter((order: any) => {
      return order.info?.toLowerCase().includes(key?.toLowerCase()) || order.name?.toLowerCase().includes(key?.toLowerCase()) || order.whatsappnumber?.toString().includes(key);
    });
    this._assignArrayToCards(orders);
  }

  // filter data
  _filter(filterBy) {
    if (filterBy == 'all') { this._getAllOrders(); return; }
    let orders = this.orders.filter((order: any) => {
      if (filterBy == 'WASHING') {
        return order.state?.iswashing;
      }
      if (filterBy == 'RASHID') {
        return order.state?.israshid;
      }
      if (filterBy == 'PAYMENT DUE') {
        return order.state?.status == 'Payment Due';
      }
    });
    this._assignArrayToCards(orders);
  }

  // sort data
  _sort(sortBy) {
    let orders = this.orders;
    if (sortBy == 'asc') {
      this.open = orders.filter(x => x.state.state == 'Open').sort((a: any, b: any) => {
        return (this.getTime(new Date(a.invoice?.completiondate)) - this.getTime(new Date(b.invoice?.completiondate)));
      });
      this.wip = orders.filter(x => x.state.state == 'WIP').sort((a: any, b: any) => {
        return (this.getTime(new Date(a.invoice?.completiondate)) - this.getTime(new Date(b.invoice?.completiondate)));
      });
      this.ready = orders.filter(x => x.state.state == 'Ready').sort((a: any, b: any) => {
        return (this.getTime(new Date(a.invoice?.completiondate)) - this.getTime(new Date(b.invoice?.completiondate)));
      });
      this.payment = orders.filter(x => x.state.state == 'Payment').sort((a: any, b: any) => {
        return (this.getTime(new Date(a.invoice?.completiondate)) - this.getTime(new Date(b.invoice?.completiondate)));
      });
    } else {
      this.open = orders.filter(x => x.state.state == 'Open').sort((a: any, b: any) => {
        return (this.getTime(new Date(b.invoice?.completiondate)) - this.getTime(new Date(a.invoice?.completiondate)));
      });
      this.wip = orders.filter(x => x.state.state == 'WIP').sort((a: any, b: any) => {
        return (this.getTime(new Date(b.invoice?.completiondate)) - this.getTime(new Date(a.invoice?.completiondate)));
      });
      this.ready = orders.filter(x => x.state.state == 'Ready').sort((a: any, b: any) => {
        return (this.getTime(new Date(b.invoice?.completiondate)) - this.getTime(new Date(a.invoice?.completiondate)));
      });
      this.payment = orders.filter(x => x.state.state == 'Payment').sort((a: any, b: any) => {
        return (this.getTime(new Date(b.invoice?.completiondate)) - this.getTime(new Date(a.invoice?.completiondate)));
      });
    }
  }

  // get time from datetime timestamp
  private getTime(date?: Date) {
    return date ? date.getTime() : 0;
  }

}
