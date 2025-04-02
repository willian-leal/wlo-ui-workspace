import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { ThemeService } from '@wlo/theme/theme.service';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

const themeService = new ThemeService();
themeService.initTheme();

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
