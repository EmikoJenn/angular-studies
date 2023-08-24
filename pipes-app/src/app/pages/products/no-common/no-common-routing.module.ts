import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoCommonComponent } from './no-common.component';

const routes: Routes = [{ path: '', component: NoCommonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoCommonRoutingModule { }
