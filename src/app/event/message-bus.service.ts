import { Injectable } from '@angular/core';
import * as EventEmitter from 'events';

@Injectable()
export class MessageBusService {
  instance: MessageBusService;
  private constructor() {

  }
  create() {
    if(!this.instance) {
      this.instance = new MessageBusService();
    }
    return this.instance;
  }

  messages: HighLevelMessage[];

  push(message) {
    this.messages.push(message);
  }
  pop() {
    return this.messages.pop();
  }

}
export interface HighLevelMessage {
  sender: string;
  message: any;
}
