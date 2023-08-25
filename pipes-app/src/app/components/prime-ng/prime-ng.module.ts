import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
