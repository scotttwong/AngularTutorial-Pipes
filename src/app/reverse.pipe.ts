import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0 || value === '') {
      return value;
    }
    else {
      return value.split('').reverse().join('');
    }
  }

}
