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
    this._http.getOneSongPage(songId).subscribe(data => {
      this.allSongs = data;

      
    });


  }
  onClose() {
    this.dialogRef.close();
  }
}
