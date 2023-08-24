import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDatesRoutingModule } from './text-dates-routing.module';
import { TextDatesComponent } from './text-dates.component';


@NgModule({
  declarations: [
    TextDatesComponent
  ],
  imports: [
    CommonModule,
    TextDatesRoutingModule
  ]
})
export class TextDatesModule { }
