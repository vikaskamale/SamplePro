import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitlecasePipe implements PipeTransform {

  @Pipe({ name: 'titleCase', standalone: true, pure: true })
/** Transform to Title Case: uppercase the first letter of the words in a string. */

  transform(value:string):string {
    return value.length === 0
    ? ''
    : value.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
  }

}
