import { Component } from '@angular/core';
import { WloButtonComponent, WloTypographyComponent } from 'wlo-ui';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-button-showcase',
  imports: [WloButtonComponent, WloTypographyComponent, MatTabsModule, CommonModule, TranslateModule],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {}
