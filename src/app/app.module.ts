import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { MessageService} from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    GuestbookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
