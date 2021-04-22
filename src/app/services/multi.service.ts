import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiService {
  static instance: number = 0;
  constructor() {
    MultiService.instance++;
    console.log("Instanciated number " + MultiService.instance + " of MultiService");
   }
}
