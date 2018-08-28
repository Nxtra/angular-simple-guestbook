import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})

export class GuestbookComponent implements OnInit {

  @Input()
  name = 'jolo';

  @HostBinding('class') class = ['col-sm-12 col-md-6 col-lg-3'];

  @Input()
  message: Message = {
    Author: 'Nick',
    Date: '9023090294902',
    Message: 'This is a default message'
  };

  ngOnInit() {
  }

}
