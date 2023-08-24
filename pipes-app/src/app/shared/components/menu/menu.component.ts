import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Basic Pipes',
            icon: 'pi pi-arrow-circle-left',
            routerLink: 'products',
          },
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: 'products/text-dates',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'products/numbers',
          },
          {
            label: 'No Common Use',
            icon: 'pi pi-tags',
            routerLink: 'products/no-common',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'New Pipe',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
