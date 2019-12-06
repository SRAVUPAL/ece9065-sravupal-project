import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-songsPage',
  templateUrl: './songsPage.component.html',
  styleUrls: ['./songsPage.component.scss']
})

export class SongsPageComponent implements OnInit {

  allSongs: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getSongsPage().subscribe(data => {
      this.allSongs = data;
      console.log(this.allSongs)
    });
  }

}
