import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDatesRoutingModule } from './text-dates-page-routing.module';
import { TextDatesPageComponent } from './text-dates-page.component';

@NgModule({
  declarations: [TextDatesPageComponent],
  imports: [CommonModule, TextDatesRoutingModule],
})
export class TextDatesPageModule {}
