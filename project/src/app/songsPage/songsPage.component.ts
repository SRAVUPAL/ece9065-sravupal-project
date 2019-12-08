import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-songsPage',
  templateUrl: './songsPage.component.html',
  styleUrls: ['./songsPage.component.scss']
})

export class SongsPageComponent implements OnInit {

  allSongs: Object;

  constructor(private _http: HttpService, private dialog: MatDialog) { }

  ngOnInit() {
    this._http.getSongsPage().subscribe(data => {
      this.allSongs = data;
      console.log(this.allSongs)
    });
  }

  expand() {
    this.dialog.open(SongsPageComponent);
  }
}
