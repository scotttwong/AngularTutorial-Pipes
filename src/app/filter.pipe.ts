import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: string, propName: string): any {
    
    if (filterText === '' || value.length === 0) {
      return value;
    }

    let newArr = [];
    for (const item of value) {
      if (item[propName].includes(filterText))
        newArr.push(item);
    }

    return newArr;
  }

}
