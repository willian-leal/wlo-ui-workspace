import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeKey = 'wlo-ui-theme';

  getTheme(): 'light' | 'dark' {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
    }
    return 'light';
  }
  
  setTheme(theme: 'light' | 'dark') {
    if (typeof window !== 'undefined' && window.localStorage) {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem(this.themeKey, theme);
    }
  }

  toggleTheme() {
    const newTheme = this.getTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  initTheme() {
    const theme = this.getTheme();
    this.setTheme(theme);
  }
}
