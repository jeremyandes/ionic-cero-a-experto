import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], text: string = '', column: string = 'title') {
    if (!value || !text) { return value; }

    text = text.toLocaleLowerCase();

    const newValue = value.filter(item => item[column].toLocaleLowerCase().includes(text));
    console.log(newValue);
    return newValue;
  }

}
