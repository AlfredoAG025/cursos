import { Pipe, PipeTransform } from '@angular/core';

type canFlyType = 'Puede volar' | 'No puede volar';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): canFlyType {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
