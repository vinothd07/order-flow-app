import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
 
  @Input() item: any;  // this decorator will help to get data from parent component
  
  constructor() { }

  ngOnInit(): void {
  }

}
