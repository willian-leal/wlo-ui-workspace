import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, TranslatePipe, TranslateDirective],
  template: `<app-layout></app-layout>`,
})
export class AppComponent {}
