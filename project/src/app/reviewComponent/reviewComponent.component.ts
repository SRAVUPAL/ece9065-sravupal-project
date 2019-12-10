import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsPageComponent } from '../songsPage/songsPage.component';

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
    private dialogRef: MatDialogRef<ReviewComponent>,
    private router: Router) { }

  onButtonClick(): void {
    this.router.navigate(['/songsPage']);
  }

  ngOnInit() {
    let songId = this.id;
    let songTitle = "";
    this._http.getOneSongPage(songId).subscribe(data => {
      this.allSongs = data;
      // songTitle = this.allSongs[].title;
      console.log(songTitle);
      console.log(songId);
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
    alert("Song Deleted");
    this.dialogRef.close();
  }

  deleteSong(id) {
    this._http.deleteSongPage(id);
    alert("Song Deleted");
    this.dialogRef.close();
  }

}
