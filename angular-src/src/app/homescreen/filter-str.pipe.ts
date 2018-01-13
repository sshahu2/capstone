import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStr'
})
export class FilterStrPipe implements PipeTransform {

  transform(value: any, args: String): any {
    let filter: string = args ? args.toLocaleLowerCase() : null;
        //alert(selected);
       
            return filter ? value.filter((book) =>
            book.title.toLocaleLowerCase().startsWith(filter) != false) : value;
        
  }

}
