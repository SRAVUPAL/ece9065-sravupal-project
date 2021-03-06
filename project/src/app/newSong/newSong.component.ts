import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { NewReviewComponent } from '../newReview/newReview.component';
import { Router } from '@angular/router';
import { Sanitization } from '../sanitize.service';

@Component({
  selector: 'app-newSong',
  templateUrl: './newSong.component.html',
  styleUrls: ['./newSong.component.scss']
})
export class NewSongComponent implements OnInit {

  form: FormGroup;
  id: any;

  constructor(private _http: HttpService,
    private dialogRef: MatDialogRef<NewSongComponent>,
    private http: HttpClient,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private route: Router,
    private sanitization: Sanitization) { this.defaultForm(); }

  ngOnInit() { }

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

  addSongForm(songTitle: String, songRating: Number, songArtist: String, songAlbum: String, songLength: Number, songYear: Number, songGenre: String, songComment: String, songHidden: Boolean, songThumbnail: String) {
    if (!this.sanitization.checkString(songTitle) ||
      !this.sanitization.checkString(songArtist) ||
      !this.sanitization.checkString(songAlbum) ||
      !this.sanitization.checkString(songGenre) ||
      !this.sanitization.checkString(songComment)
    ) {
      return;
    }
    this._http.postSongsPage(songTitle, songRating, songArtist, songAlbum, songLength, songYear, songGenre, songComment, songHidden, songThumbnail)
    this.dialogRef.close();
    setTimeout(() => {
      this.route.navigate(['userSongComponent']);
      window.location.reload();
    }, 500);

  }

  addReviewForm() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "200%";
    dialogConfig.height = "200%";

    this.dialog.open(NewReviewComponent, dialogConfig);
  }

  close() {
    this.dialogRef.close();
  }
}