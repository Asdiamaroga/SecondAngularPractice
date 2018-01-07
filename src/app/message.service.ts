import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {
  
  private _messages = new BehaviorSubject<any>([])
  messages = this._messages.asObservable()

  constructor() { }

  addMessage(message: string) {
    this._messages.next("Message-service: " + message);
  }
 
  

}
