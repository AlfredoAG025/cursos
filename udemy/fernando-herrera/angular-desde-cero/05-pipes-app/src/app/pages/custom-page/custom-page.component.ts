import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilerPipe } from '../../pipes/hero-filter.pipe';

@Component({
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilerPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Freddy Arroyo');

  upperCase = signal(true);

  heroes = signal<Hero[]>(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

  toggleUppercase() {
    this.upperCase.update(current => !current);
  }
}
