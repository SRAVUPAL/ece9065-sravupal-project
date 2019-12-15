import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newReview',
  templateUrl: './newReview.component.html',
  styleUrls: ['./newReview.component.scss']
})
export class NewReviewComponent implements OnInit {

  form: FormGroup;
  id: any;

  constructor(private _http: HttpService,
    private dialogRef: MatDialogRef<NewReviewComponent>,
    private http: HttpClient,
    private formBuilder: FormBuilder) { this.defaultForm(); }

  ngOnInit() { }

  defaultForm() {
    this.form = this.formBuilder.group({
      songReviwer: ['', Validators.required],
      songName: ['', Validators.required],
      songReview: ['', Validators.required],
      songRating: ['', Validators.required]
    });
  }

  addReviewForm(songReviwer: String,
    songName: String,
    songReview: String,
    songRating: String) {
    this._http.postReviewsPage(songReviwer, songName, songReview, songRating);
    alert("Review Added");
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}