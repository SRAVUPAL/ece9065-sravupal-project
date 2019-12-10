import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder) { this.defaultForm(); }

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
    this._http.postSongsPage(songTitle, songRating, songArtist, songAlbum, songLength, songYear, songGenre, songComment, songHidden, songThumbnail)
    alert("Song Added");
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}