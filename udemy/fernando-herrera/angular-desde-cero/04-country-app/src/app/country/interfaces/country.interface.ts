export interface Country {
  area: number;
  borders: string[];
  capital: string;
  cca2: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  flag: string;
  flagSvg: string;
  languages: { [key: string]: string };
  maps: { googleMaps: string; openStreetMaps: string };
  name: string;
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
}
