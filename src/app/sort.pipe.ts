import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length === 0 || propName === '' || propName === undefined) {
      return value;
    }
    else {
      return value.sort((a,b) => {
        return a[propName].localeCompare(b[propName]);
      });
    }    
  }

}
