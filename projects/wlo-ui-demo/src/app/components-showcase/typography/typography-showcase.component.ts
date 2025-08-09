import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { WloTypographyComponent } from 'wlo-ui';

@Component({
  standalone: true,
  selector: 'app-typography-showcase',
  imports: [WloTypographyComponent, MatTabsModule, CommonModule, TranslateModule],
  templateUrl: './typography-showcase.component.html',
  styleUrl: './typography-showcase.component.scss'
})
export class TypographyShowcaseComponent {}
