import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { StoreService } from 'src/app/services/store.service';

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, StoreRoutingModule],
  providers: [StoreService],
})
export class StoreModule {}
