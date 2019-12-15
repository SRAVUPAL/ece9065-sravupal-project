import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SongsPageComponent } from '../songsPage/songsPage.component';
import { NewReviewComponent } from '../newReview/newReview.component';
import { EditSongComponent } from '../editSong/editSong.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InteractionService } from '../interaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reviewComponent',
  templateUrl: './reviewComponent.component.html',
  styleUrls: ['./reviewComponent.component.scss']
})

export class ReviewComponent implements OnInit {

  form: FormGroup;
  editBlock = "hide";
  allSongs: Object;
  songReviews = [];
  allReviews: Object;
  id: any;
  songId: any;
  oneSong: Object;
  userClass: any;
  subscription: Subscription;
  @Input() songsPage: SongsPageComponent;

  constructor(private _http: HttpService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ReviewComponent>,
    private router: Router,
    private _interactionService: InteractionService) {
    this.subscription = _interactionService.token$.subscribe(
      mission => {
        this.userClass = mission;
        console.log(mission);
      });
  }

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
    console.log(id);
    this._http.deleteSongPage(id);
    alert("Song Deleted");
    this.dialogRef.close();
    // console.log(this.userClass);
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
    // this.editBlock = "show";
    const dialogConfig = new MatDialogConfig();
    console.log(id);
    this._interactionService.sendSongId(id);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";
    // let dialogRef: MatDialogRef<EditSongComponent>;

    this.dialog.open(EditSongComponent, dialogConfig);
    // dialogRef.componentInstance.oneSongId = id;
    // console.log(dialogRef.componentInstance.id)
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     id: id
    //   }
    // };
  }

  defaultForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      rating: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      length: ['', Validators.required],
      year: ['', Validators.required],
      genre: ['', Validators.required],
      comment: ['', Validators.required],
      hidden: ['', Validators.required],
      thumbnail: ['', Validators.required]
    });
  }

  editSongForm(id, songTitle: String, songRating: Number, songArtist: String, songAlbum: String, songLength: Number, songYear: Number, songGenre: String, songComment: String, songHidden: Boolean, songThumbnail: String) {
    this._http.editSongPage(id, songTitle, songRating, songArtist, songAlbum, songLength, songYear, songGenre, songComment, songHidden, songThumbnail)
    console.log(this.songId)
    alert("Song Added");
    this.dialogRef.close();
  }

  addToPlaylist(id, playlistName: String,
    songTitle: string,
    songAlbum: String) {
    this._http.addToPlaylist(playlistName, songTitle, songAlbum);
  }
}
