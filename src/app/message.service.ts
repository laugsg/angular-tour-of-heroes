import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  /** messages
   * Array store of string messages
   */
  messages: string[] = [];

  /** add
   * Push a new message into 'messages' array
   * @param message 
   */
  add(message: string) {
    this.messages.push(message)
  }

  /** clear
   * Remove all messages from 'messages' array 
   */
  clear() {
    this.messages = [];
  }

  constructor() { }
}
