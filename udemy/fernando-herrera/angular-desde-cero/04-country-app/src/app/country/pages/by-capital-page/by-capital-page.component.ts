import { Component, computed, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountrySearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interface';

@Component({
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCapital(params.query);
    },
    params: () => ({ query: this.query() }),
  });

  safeValue = computed(
    () => this.countryResource.hasValue() ? this.countryResource.value() : []
  );


  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: (async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(this.countryService.searchByCapital(params.query));
  //   }),
  // });

  // isLoading = signal(false);
  // hasError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string): void {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.hasError.set(null);

  //   this.countryService.searchByCapital(query).subscribe(
  //     {
  //       next: (countries) => {
  //         this.isLoading.set(false);
  //         this.countries.set(countries);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.hasError.set(err);
  //       }
  //     }
  //   );
  // }
}
