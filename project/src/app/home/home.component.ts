import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ViewAllDataComponent } from '../viewAllData/viewAllData.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataset: any;
  allSongs: Object;
  allReviews: Object;
  userClass: any;

  constructor(private _http: HttpService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this._http.getSongsPage().subscribe((data: any[]) => {
      this.allSongs = data.sort(function (i, j) {
        return j.rating - i.rating;
        this.dataset = this.allSongs;
      })
    });
    this._http.getReviewsPage().subscribe((data: any[]) => {
      this.allReviews = data.sort(function (i, j) {
        return j.rating - i.rating;
      })
    });
  }

  expand(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    let dialogRef: MatDialogRef<ViewAllDataComponent>;

    dialogRef = this.dialog.open(ViewAllDataComponent, dialogConfig);
    dialogRef.componentInstance.id = id;
  }

}
