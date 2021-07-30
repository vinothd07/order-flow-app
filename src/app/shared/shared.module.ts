import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card/order-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [OrderCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [OrderCardComponent]
})

export class SharedModule { }
