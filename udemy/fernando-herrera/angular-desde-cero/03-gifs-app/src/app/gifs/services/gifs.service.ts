import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Observable, map, tap } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'search-history';

const loadSearchHistoryFromLocalStorage = (): Record<string, any> => {
  const searchHistoryFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(searchHistoryFromLocalStorage);
  return gifs;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];

    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadSearchHistoryFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  saveSearchHistoryLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });

  private baseUrl = environment.giphyUrl;
  private baseParams = {
    api_key: environment.giphyApiKey,
    limit: 25,
    offset: 0,
    rating: 'g',
  }

  constructor() {
    this.loadTrendingGifs()
  }

  loadTrendingGifs() {
    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${this.baseUrl}/gifs/trending`, {
      params: {
        ...this.baseParams,
        offset: this.trendingPage() * 20,
      },
    }).subscribe(
      ({ data }) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(data);
        this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
        this.trendingPage.update(page => page + 1);
        this.trendingGifsLoading.set(false);
      }
    );
  }


  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${this.baseUrl}/gifs/search`, {
      params: {
        q: query,
        ...this.baseParams,
      },
    }).pipe(
      map(({ data }) => data),
      map(items => GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items => {
        this.searchHistory.update(history => ({ ...history, [query.toLowerCase()]: items }))
      })
    );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }



}
