import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './message';
import {map, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private guestbookURL = 'https://8y5o5idfl4.execute-api.eu-west-1.amazonaws.com/default/posts';  // URL to web api

  constructor(private http: HttpClient) { }

  getResponse(): Observable<any>{
    return this.http.get(this.guestbookURL);
  }

  getMessages(): Observable<Message[]> {
    return this.http
      .get(this.guestbookURL)
      .pipe(
        tap(heroes => console.log('fetched Messages')),
        map((responseJSON: { Items: any}) => {
          const data = responseJSON.Items;
          return data.splice(0, 100);
        }),
        map((list: Array<Message>) => {
          return list.map(it => {
            let message : Message = {
              Author: it.Author,
              Date: it.Date,
              Message: it.Message
            }
            return message;
          });
        })
      );
  }
}
