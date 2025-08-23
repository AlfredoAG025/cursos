import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string): void {
    this.gifsService.searchGifs(query).subscribe(resp => this.gifs.set(resp));
  }
}
