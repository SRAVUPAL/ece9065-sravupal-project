import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { TouchSequence } from 'selenium-webdriver';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import 'rxjs';
import { interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ReviewComponent } from './reviewComponent/reviewComponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'project';
  show = 'show';
  pollingData: any;
  allSongs: Object;
  allReviews: Object;
  userClass: any;

  constructor(private _http: HttpService,
    private dialog: MatDialog
  ) {

    //   interval(2000).switchMap(() => this._http.getSongsPage()).map((data: any[]) => data)
    //   .subscribe((data) => {
    //     this.allSongs=data.sort(function(a, b) {
    //      return b.rating - a.rating;
    //    }); 
    //      console.log(data);// see console you get output every 5 sec
    //   });
  }

  ngOnInit() {
    this._http.getSongsPage().subscribe((data: any[]) => {
      this.allSongs = data.sort(function (i, j) {
        return j.rating - i.rating;
      })
    });
    this._http.getReviewsPage().subscribe((data: any[]) => {
      this.allReviews = data.sort(function (i, j) {
        return j.rating - i.rating;
      })
    });
  }
  hidePage() {
    // if(this.loginComponent.userClass == "admin"){
      console.log(this.userClass)
    // };
  }
  showPage() {
    this.show = "show";
  }
  expand(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    let dialogRef: MatDialogRef<ReviewComponent>;

    dialogRef = this.dialog.open(ReviewComponent, dialogConfig);
    dialogRef.componentInstance.id = id;
  }
}