import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersRoutingModule } from './numbers-routing.module';
import { NumbersComponent } from './numbers.component';


@NgModule({
  declarations: [
    NumbersComponent
  ],
  imports: [
    CommonModule,
    NumbersRoutingModule
  ]
})
export class NumbersModule { }
