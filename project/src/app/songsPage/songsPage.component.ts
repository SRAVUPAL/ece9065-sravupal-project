import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material';
import { ReviewComponent } from '../reviewComponent/reviewComponent.component';

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "auto";
    this.dialog.open(ReviewComponent, dialogConfig);
  }
}
