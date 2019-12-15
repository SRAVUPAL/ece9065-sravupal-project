import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
  private _soingIdSourse = new Subject<Number>();
  songId$ = this._soingIdSourse.asObservable();
  constructor() { }

  sendSongId(songId: Number){
    this._soingIdSourse.next(songId);
  }
}
