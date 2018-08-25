import { Component } from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guestbook';

  response: any;
  messages: Array<Message>;
  message: Message ;

  constructor(public messageService: MessageService) {
    // this.getResponse();
    this.messageService.getMessages()
      .subscribe(
        (messageList) => this.messages = messageList
      );
  }

  getResponse(): any {
    this.messageService.getResponse().subscribe( (res) => this.response = res);
    console.log(this.response);
  }

  getFirstMessage(): Message {
    return this.messages[0];
  }
}
