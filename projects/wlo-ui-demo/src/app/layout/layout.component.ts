import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@wlo/theme/theme.service';
import { WloButtonComponent, WloTypographyComponent } from 'wlo-ui';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, WloButtonComponent, WloTypographyComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private theme: ThemeService) {}

  ngOnInit() {
    this.theme.initTheme();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.theme.getTheme() === 'dark';
  }
}
