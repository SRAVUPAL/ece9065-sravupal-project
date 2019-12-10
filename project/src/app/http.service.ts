import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getSongsPage() {
    return this.http.get('http://localhost:3000/admin/songs')
  }

  getOneSongPage(id) {
    return this.http.get('http://localhost:3000/admin/songs/' + id)
  }

  postSongsPage(songTitle: String,
    songRating: Number,
    songArtist: String,
    songAlbum: String,
    songLength: Number,
    songYear: Number,
    songGenre: String,
    songComment: String,
    songHidden: Boolean,
    songThumbnail: String) {
    const obj = {
      title: songTitle,
      rating: songRating,
      artist: songArtist,
      album: songAlbum,
      length: songLength,
      year: songYear,
      genre: songGenre,
      comment: songComment,
      Hidden: songHidden,
      thumbnail: songThumbnail
    };
    this.http.post('http://localhost:3000/admin/songs/', obj).subscribe(res => console.log('Song Added'));
  }

  deleteSongPage(id) {
    return this.http.delete('http://localhost:3000/admin/songs/' + id).subscribe(res => console.log('Song Deleted'));
  }

  postReviewsPage(songReviwer: String,
    songName: String,
    songReview: String,
    songRating: Number) {
    const obj = {
      reviwer: songReviwer,
      title: songName,
      review: songReview,
      rating: songRating
    };
    this.http.post('http://localhost:3000/admin/songs/', obj).subscribe(res => console.log('Review Added'));
  }

  getReviewsPage() {
    return this.http.get('http://localhost:3000/admin/reviews')
  }
}

