import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsPageComponent } from '../songsPage/songsPage.component';
import { NewReviewComponent } from '../newReview/newReview.component';
import { EditSongComponent } from '../editSong/editSong.component';

@Component({
  selector: 'app-reviewComponent',
  templateUrl: './reviewComponent.component.html',
  styleUrls: ['./reviewComponent.component.scss']
})
export class ReviewComponent implements OnInit {

  allSongs: Object;
  songReviews = [];
  allReviews: Object;
  id: any;
  @Input() songsPage: SongsPageComponent;

  constructor(private _http: HttpService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ReviewComponent>,
    private router: Router) { }

  onButtonClick(): void {
    this.router.navigate(['/songsPage']);
  }

  ngOnInit() {
    let songId = this.id;
    this._http.getOneSongPage(songId).subscribe(data => {
      this.allSongs = data;
    });
    this._http.getReviewsPage().subscribe(data => {
      // for (let i = 0; i < this.allReviews[i].length(); i++) {
      // if (this.allReviews[i].title == "dangerous") {
      this.allReviews = data;
      // }
      // }
    });
  }
  onClose() {
    this.dialogRef.close();
  }

  deleteSong(id) {
    this._http.deleteSongPage(id);
    alert("Song Deleted");
    this.dialogRef.close();
  }

  addReview() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";

    this.dialog.open(NewReviewComponent, dialogConfig);
  }

  editSong(id) {
    const dialogConfig = new MatDialogConfig();
    console.log(id);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";
    let dialogRef: MatDialogRef<EditSongComponent>;

    this.dialog.open(EditSongComponent, dialogConfig);
    dialogRef.componentInstance.id = id;
    console.log(dialogRef.componentInstance.id)
  }
}
