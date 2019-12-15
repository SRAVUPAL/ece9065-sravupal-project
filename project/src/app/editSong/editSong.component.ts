import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription }   from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MatDialogModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewComponent } from '../reviewComponent/reviewComponent.component';
import { Observable } from 'rxjs';
import { InteractionService } from '../interaction.service';
// import { Filter } from 'rxjs/Observable';

@Component({
  selector: 'app-editSong',
  template: `<pre>{{ state$ | async | json }}</pre>`,
  templateUrl: './editSong.component.html',
  styleUrls: ['./editSong.component.scss']
})
export class EditSongComponent implements OnInit {
  private state$: Observable<object>;
  form: FormGroup;
  id: any;
  oneSongId: any;
  oneSong: any;
  @Input() reviewComponent: ReviewComponent;
  test: any;
  subscription: Subscription;

  constructor(private _http: HttpService,
    private dialogRef: MatDialogRef<EditSongComponent>,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private _interactionService: InteractionService) {
    this.defaultForm();
    this.subscription = _interactionService.songId$.subscribe(
      mission => {
        this.oneSongId = mission;
    });
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation.extras.state as {
    //   transId: string,
    // };
    // this.test = "Transaction Key:" + state.transId;
    // const navigation = this.router.getCurrentNavigation();
    // this.oneSongId = navigation.extras.state.id;
  }

  onButtonClick(): void {
    this.router.navigate(['/reviewComponent']);
  }

  ngOnInit() {
    console.log(this.subscription);
    console.log(this.oneSongId);
    // let dialogRef: MatDialogRef<ReviewComponent>;
    // this.oneSongId = dialogRef.componentInstance.id;
    // this.state$ =  this.router.events.pipe(
    // filter(e => e instanceof ReviewComponent),
    // map(() => this.router.getCurrentNavigation().extras.state)
    // )
    console.log(this.oneSongId);
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
    console.log(this.oneSongId)
    alert("Song Added");
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}