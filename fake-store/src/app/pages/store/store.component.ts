import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  constructor(private storeService: StoreService) {}

  get Store() {
    return this.storeService.store;
  }
}
