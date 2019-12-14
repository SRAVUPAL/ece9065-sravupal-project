import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReviewComponent } from '../reviewComponent/reviewComponent.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NewSongComponent } from '../newSong/newSong.component';

@Component({
  selector: 'app-playlistComponent',
  templateUrl: './playlistComponent.component.html',
  styleUrls: ['./playlistComponent.component.scss']
})

export class PlaylistComponent implements OnInit {

  allSongs: Object;
  id: any;
  @Input() reviewComponent: ReviewComponent;

  constructor(private _http: HttpService,
    private dialog: MatDialog,
    private router: Router) { }

  onButtonClick(): void {
    this.router.navigate(['/songsPage']);
  }

  viewSong() {
    this.router.navigate(['reviewComponent', this.reviewComponent])
  }

  ngOnInit() {
    this._http.getSongsPage().subscribe((data: any[]) => {
      this.allSongs = data.sort(function (i, j) {
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
    let dialogRef: MatDialogRef<ReviewComponent>;

    dialogRef = this.dialog.open(ReviewComponent, dialogConfig);
    dialogRef.componentInstance.id = id;
  }

  addNewSong() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";

    this.dialog.open(NewSongComponent, dialogConfig);
  }
}
