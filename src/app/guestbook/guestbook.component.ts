import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  @Input()
  name = 'jolo';


  @Input()
  message: Message = {
    Author: 'Nick',
    Date: '9023090294902',
    Message: 'This is a default message'
  };

  ngOnInit() {
  }

}
