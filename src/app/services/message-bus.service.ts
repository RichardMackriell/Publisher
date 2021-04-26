import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {


  eventEmitter = new EventEmitter<{ message: string }>();
  behaviourSubject = new BehaviorSubject<{ message: string}>({message: "default"});
  subject = new Subject<{ message: string}>();
  observable = new Observable<{message: string}>();

  constructor() { }
}
