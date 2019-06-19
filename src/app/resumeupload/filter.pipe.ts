/* Created by Christy 
Resume Parser project 
filter for overall search in html table

*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, term: any) {
    if (!term) return value;
    return value.filter((item: any) => {
      for (let prop in item) {
        if (typeof item[prop] === "string" && item[prop].toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    });
  }
}