import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoCommonRoutingModule } from './no-common-routing.module';
import { NoCommonComponent } from './no-common.component';


@NgModule({
  declarations: [
    NoCommonComponent
  ],
  imports: [
    CommonModule,
    NoCommonRoutingModule
  ]
})
export class NoCommonModule { }
