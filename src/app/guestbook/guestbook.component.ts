import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  @Input()
  name: string = 'jolo';

  ngOnInit() {
  }

}
