import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from 'src/app/gifs/services/gifs.service';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}

function removeKey<K extends string>(items: Record<string, any>, key: K) {
  const { [key]: _, ...rest } = items;
  return rest;

}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {
  gifsService = inject(GifsService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  query = toSignal(
    this.route.firstChild!.params.pipe(
      map(params => params['query'] as string | undefined)
    )
  );

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search'
    }
  ];

  deleteKey(key: string): void {
    this.gifsService.searchHistory.update(history => removeKey(history, key));

    if (key === this.query()) {
      this.router.navigate(['dashboard', 'search']);
    }
  }
}
