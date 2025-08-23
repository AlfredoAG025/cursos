import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryPageComponent {
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )
  );

  gifsService = inject(GifsService);

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));

}
