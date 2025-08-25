import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es-MX' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('fr');

  constructor() {
    this.currentLocale.set(
      localStorage.getItem('locale') as AvailableLocale ?? 'es-MX'
    )
  }

  getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    this.currentLocale.set(locale);
    localStorage.setItem('locale', locale);
    window.location.reload();
  }
}
