import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewComponent } from '../reviewComponent/reviewComponent.component'

@Component({
  selector: 'app-editSong',
  templateUrl: './editSong.component.html',
  styleUrls: ['./editSong.component.scss']
})
export class EditSongComponent implements OnInit {

  form: FormGroup;
  id: any;
  oneSongId: any;
  oneSong: any;
  @Input() reviewComponent: ReviewComponent;

  constructor(private _http: HttpService,
    private dialogRef: MatDialogRef<EditSongComponent>,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router) { this.defaultForm(); }

  onButtonClick(): void {
    this.router.navigate(['/reviewComponent']);
  }

  ngOnInit() {
    this.oneSongId = this.id;
  }

  defaultForm() {
    let oneSong = this.oneSongId;
    this._http.getOneSongPage(oneSong).subscribe(data => {
      this.oneSong = data;
    });
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

  editSongForm(songTitle: String, songRating: Number, songArtist: String, songAlbum: String, songLength: Number, songYear: Number, songGenre: String, songComment: String, songHidden: Boolean, songThumbnail: String) {
    this._http.editSongPage(this.oneSongId, songTitle, songRating, songArtist, songAlbum, songLength, songYear, songGenre, songComment, songHidden, songThumbnail)
    alert("Song Added");
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}