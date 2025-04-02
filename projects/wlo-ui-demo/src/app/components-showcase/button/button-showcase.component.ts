import { Component } from '@angular/core';
import { WloButtonComponent, WloTypographyComponent } from 'wlo-ui';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  standalone: true,
  selector: 'app-button-showcase',
  imports: [WloButtonComponent, WloTypographyComponent, MatTabsModule],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {}
