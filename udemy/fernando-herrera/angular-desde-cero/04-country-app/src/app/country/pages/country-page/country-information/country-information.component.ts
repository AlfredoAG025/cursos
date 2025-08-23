import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe, KeyValuePipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
