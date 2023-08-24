import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: 'text-dates',
    loadChildren: () =>
      import('./text-dates/text-dates.module').then((m) => m.TextDatesModule),
  },
  {
    path: 'numbers',
    loadChildren: () =>
      import('./numbers/numbers.module').then((m) => m.NumbersModule),
  },
  {
    path: 'no-common',
    loadChildren: () =>
      import('./no-common/no-common.module').then((m) => m.NoCommonModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
