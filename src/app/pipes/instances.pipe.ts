import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instances'
})
export class InstancesPipe implements PipeTransform {
  static instances = 0;
  /**
   *
   */
  constructor() {
    InstancesPipe.instances++;
    console.log(InstancesPipe.instances);
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("Instance pipe transform called");
    return value;
  }

}
