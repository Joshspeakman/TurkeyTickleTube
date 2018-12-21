import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  connection: signalR.HubConnection;
  messages: string[] = [];
  newMessage = '';

  constructor() { }

  ngOnInit() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chatHub')
      .build();

    this.connection.start().catch(err => console.log(err));

    this.connection.on('receiveMessage', (username: string, message: string) => {
      this.messages.push(`${username}: ${message}`);
    });
  }

  submit(message: string) {
    this.connection.send('sendMessage', Math.random(), message)
      .then(() => console.log('message sent'));
  }
}
