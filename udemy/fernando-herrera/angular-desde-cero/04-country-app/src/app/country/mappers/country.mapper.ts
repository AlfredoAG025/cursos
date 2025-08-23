import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    const currencies: Record<string, { name: string, symbol: string }> = {};
    Object.entries(restCountry.currencies).forEach(([key, value]) => {
      currencies[key] = {
        name: value.name,
        symbol: value.symbol
      };
    });

    const languages: Record<string, string> = {};
    Object.entries(restCountry.languages).forEach(([key, value]) => {
      languages[key] = value
    });

    return {
      area: restCountry.area,
      borders: restCountry.borders,
      capital: restCountry.capital?.join(',') ?? '',
      cca2: restCountry.cca2,
      currencies,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      languages,
      maps: restCountry.maps,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
      timezones: restCountry.timezones,
    }
  }

  static mapRestCountriesToCountries(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountryToCountry);
  }
}
