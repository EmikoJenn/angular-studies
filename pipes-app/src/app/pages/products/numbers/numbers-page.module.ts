import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersPageRoutingModule } from './numbers-page-routing.module';
import { NumbersPageComponent } from './numbers-page.component';

@NgModule({
  declarations: [NumbersPageComponent],
  imports: [CommonModule, NumbersPageRoutingModule],
})
export class NumbersPageModule {}
