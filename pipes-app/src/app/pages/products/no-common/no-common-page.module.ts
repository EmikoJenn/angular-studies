import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoCommonRoutingModule } from './no-common-page-routing.module';
import { NoCommonPageComponent } from './no-common-page.component';

@NgModule({
  declarations: [NoCommonPageComponent],
  imports: [CommonModule, NoCommonRoutingModule],
})
export class NoCommonPageModule {}
