import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${lowerCaseQuery}`).pipe(
      map(CountryMapper.mapRestCountriesToCountries),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(`No se puedo obtener países con ese query: ${query}`))
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${lowerCaseQuery}`).pipe(
      map(CountryMapper.mapRestCountriesToCountries),
      // delay(3000),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(`No se puedo obtener países con ese query: ${query}`))
      })
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | undefined> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map(CountryMapper.mapRestCountriesToCountries),
      map(countries => countries.at(0)),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(`No se puedo obtener países con ese código: ${code}`))
      })
    );
  }
}
