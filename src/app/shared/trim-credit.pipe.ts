import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCredit'
})
export class TrimCreditPipe implements PipeTransform {

  transform(value: string, args: string): string {
    if (value.length !== 16) {
      return 'value must be length 16';
    } else {
      const first = value.substr(0, 3);
      let second = '';
      for (let i = 0; i < 10; i++) {
        second += args;
      }
      const third = value.substr(13, 3);
      return first + second + third;
    }
  }

}
