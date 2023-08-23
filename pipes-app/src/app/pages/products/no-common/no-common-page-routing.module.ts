import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoCommonPageComponent } from './no-common-page.component';

const routes: Routes = [{ path: '', component: NoCommonPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoCommonRoutingModule {}
