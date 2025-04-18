import { Component } from '@angular/core';
import { WloTypographyComponent } from 'wlo-ui';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { WloUiModule } from "../../../../../wlo-ui/src/lib/wlo-ui.module";
import { ThemeService } from '@wlo/theme/theme.service';

@Component({
  standalone: true,
  imports: [MatTabsModule, RouterLink, WloTypographyComponent, WloUiModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private theme: ThemeService) {}

  get isDarkMode(): boolean {
    return this.theme.getTheme() === 'dark';
  }
}
