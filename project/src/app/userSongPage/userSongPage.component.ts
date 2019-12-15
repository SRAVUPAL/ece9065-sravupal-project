import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReviewComponent } from '../reviewComponent/reviewComponent.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NewSongComponent } from '../newSong/newSong.component';
import { PlaylistComponent } from '../playlistComponent/playlistComponent.component';

@Component({
  selector: 'app-userSongPage',
  templateUrl: './userSongPage.component.html',
  styleUrls: ['./userSongPage.component.scss']
})

export class UserSongPageComponent implements OnInit {

  allSongs: Object;
  playlists: Object;
  id: any;
  playlistId: any;
  playlistName: any;
  @Input() reviewComponent: ReviewComponent;

  constructor(private _http: HttpService,
    private dialog: MatDialog,
    private router: Router) { }

  onButtonClick(): void {
    this.router.navigate(['/userSongPage']);
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
    this._http.getPlaylists().subscribe(data => {
      this.playlists = data;
      let i, n;
      for (let user of Object.keys(this.playlists)) {
        i = this.playlists[user]._id;
        n = this.playlists[user].name;
      }
      this.playlistId = i;
      this.playlistId = n;
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

  viewPlaylist() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";

    this.dialog.open(PlaylistComponent, dialogConfig);
  }

  addToPlaylist(songTitle: string,
    playlistName: string,
    songAlbum: String) {
    this._http.addToPlaylist(playlistName, songTitle, songAlbum);
  }
}
