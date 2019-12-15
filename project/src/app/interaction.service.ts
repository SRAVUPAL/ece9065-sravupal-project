import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private songIdSourse = new Subject<String>();
  private tokenSourse = new Subject<String>();

  songId$ = this.songIdSourse.asObservable();
  token$ = this.tokenSourse.asObservable();
  constructor() { }

  sendSongId(songId: String) {
    this.songIdSourse.next(songId);
  }
  sendToken(token: String) {
    this.tokenSourse.next(token);
  }
}
