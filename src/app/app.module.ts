import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { MessageService} from './message.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    GuestbookComponent
  ],
  providers: [
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
