import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent },
  {
    path: 'text-dates',
    loadChildren: () =>
      import('./text-dates/text-dates-page.module').then(
        (m) => m.TextDatesPageModule
      ),
  },
  {
    path: 'numbers',
    loadChildren: () =>
      import('./numbers/numbers-page.module').then((m) => m.NumbersPageModule),
  },
  {
    path: 'no-common',
    loadChildren: () =>
      import('./no-common/no-common-page.module').then(
        (m) => m.NoCommonPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
