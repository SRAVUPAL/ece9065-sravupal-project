/*
* Reference https://mdbootstrap.com/docs/angular/forms/search/?fbclid=IwAR0DxJnSr5RQS5AUT-m-CAI5x5w-hM8YHRsE21kxpgrMkeS1aNT_jnakoAg
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return JSON. stringify(it).toLocaleLowerCase().includes(searchText);
    });
  }
}
