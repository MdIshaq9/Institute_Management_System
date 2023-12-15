import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accounts'
})
export class AccountsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "RS " + value + "/-";
  }

}
