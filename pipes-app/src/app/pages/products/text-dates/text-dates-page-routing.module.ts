import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextDatesPageComponent } from './text-dates-page.component';

const routes: Routes = [{ path: '', component: TextDatesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextDatesRoutingModule {}
