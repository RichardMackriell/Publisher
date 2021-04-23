import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateful',
  pure: false
})
export class StatefulPipe implements PipeTransform {
  
  transform(value: number): number {
    console.log("Stateful pipe transform called");
    return value;
  }
}
