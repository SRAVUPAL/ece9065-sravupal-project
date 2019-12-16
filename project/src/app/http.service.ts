import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getSongsPage() {
    return this.http.get('http://localhost:3000/admin/songs/getsong')
  }

  getOneSongPage(id) {
    return this.http.get('http://localhost:3000/admin/songs/getbyid/' + id)
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
    this.http.post('http://localhost:3000/admin/songs/createSong', obj).subscribe(res => console.log('Song Added'));
  }

  deleteSongPage(id) {
    return this.http.delete('http://localhost:3000/admin/songs/remove/' + id).subscribe(res => console.log('Song Deleted'));
  }

  postReviewsPage(songReviwer: String,
    songName: String,
    songReview: String,
    songRating: String) {
    const obj = {
      reviwer: songReviwer,
      title: songName,
      review: songReview,
      rating: songRating
    };
    this.http.post('http://localhost:3000/admin/reviews/createReview', obj).subscribe(res => console.log('Review Added'));
  }

  getReviewsPage() {
    return this.http.get('http://localhost:3000/admin/reviews/getReviews')
  }

  getUsers() {
    return this.http.get('http://localhost:3000/admin/access/getAccess')
  }

  getPlaylists() {
    return this.http.get('http://localhost:3000/admin/playlist/getPlaylists')
  }

  getAllPlaylistss() {
    return this.http.get('http://localhost:3000/admin/allPlaylists/getAllPlaylists')
  }

  addToPlaylist(playlistName: String,
    songTitle: string,
    songAlbum: String) {
    const obj = {
      name: playlistName,
      title: songTitle,
      album: songAlbum
    }
    return this.http.post('http://localhost:3000/admin/playlist/createPlaylists', obj).subscribe(res => console.log('Song Added to playlist'));
  }

  editSongPage(id, songTitle: String,
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
    return this.http.put('http://localhost:3000/admin/songs/update/' + id, obj).subscribe(res => console.log('Song Modified'));
  }
}