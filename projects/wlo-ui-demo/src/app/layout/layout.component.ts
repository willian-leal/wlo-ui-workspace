import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '@wlo/theme/theme.service';
import { WloButtonComponent, WloTypographyComponent } from 'wlo-ui';

type LangCode = 'en'|'pt'|'ar'|'de'|'es'|'fr'|'it'|'ja'|'ru'|'zh';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, WloButtonComponent, WloTypographyComponent, CommonModule, TranslateModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  langMenuOpen = false;
  currentLang: LangCode = 'en';

  // labels são chaves de tradução (ver JSON abaixo)
  languages: { code: LangCode; label: string }[] = [
    { code: 'en', label: 'wlo-ui-demo.layout.langMenu.languages.en' },
    { code: 'pt', label: 'wlo-ui-demo.layout.langMenu.languages.pt' },
    { code: 'ar', label: 'wlo-ui-demo.layout.langMenu.languages.ar' },
    { code: 'de', label: 'wlo-ui-demo.layout.langMenu.languages.de' },
    { code: 'es', label: 'wlo-ui-demo.layout.langMenu.languages.es' },
    { code: 'fr', label: 'wlo-ui-demo.layout.langMenu.languages.fr' },
    { code: 'it', label: 'wlo-ui-demo.layout.langMenu.languages.it' },
    { code: 'ja', label: 'wlo-ui-demo.layout.langMenu.languages.ja' },
    { code: 'ru', label: 'wlo-ui-demo.layout.langMenu.languages.ru' },
    { code: 'zh', label: 'wlo-ui-demo.layout.langMenu.languages.zh' },
  ];

  constructor(private theme: ThemeService, private translate: TranslateService) {}

  ngOnInit() {
    this.theme.initTheme();
    const saved = (localStorage.getItem('lang') as LangCode) || this.translate.getCurrentLang() as LangCode || 'en';
    this.setLang(saved, { persist: false }); // aplica sem regravar
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.theme.getTheme() === 'dark';
  }

  toggleLangMenu(ev: MouseEvent) {
    ev.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
  }
  closeLangMenu() { this.langMenuOpen = false; }

  @HostListener('document:click')
  onDocClick() { this.closeLangMenu(); }

  setLang(code: LangCode, opts: { persist?: boolean } = { persist: true }) {
    this.currentLang = code;
    this.translate.use(code);
    if (opts.persist !== false) localStorage.setItem('lang', code);

    // Direção de texto (RTL para árabe)
    document.documentElement.dir = (code === 'ar') ? 'rtl' : 'ltr';

    this.closeLangMenu();
  }
}
