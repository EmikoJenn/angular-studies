import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersPageComponent } from './numbers-page.component';

const routes: Routes = [{ path: '', component: NumbersPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumbersPageRoutingModule {}
