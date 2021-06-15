import { _Date } from '../types/types';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: _Date): string {
    return `${date.day} | ${date.month} | ${date.year}`
  }

}
