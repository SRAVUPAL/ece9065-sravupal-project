import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dbConfig } from "./config";
const dbUrl = dbConfig.getAllSongsurl;
const adminUrl = dbUrl + "/admin";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getSongsPage() {
    return this.http.get(adminUrl + '/songs/getsong')
  }

  getOneSongPage(id) {
    return this.http.get(adminUrl + '/songs/getbyid/' + id)
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
    this.http.post(adminUrl + '/songs/createSong', obj).subscribe(res => console.log('Song Added'));
  }

  deleteSongPage(id) {
    return this.http.delete(adminUrl + '/songs/remove/' + id).subscribe(res => console.log('Song Deleted'));
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
    this.http.post(adminUrl + '/reviews/createReview', obj).subscribe(res => console.log('Review Added'));
  }

  getReviewsPage() {
    return this.http.get(adminUrl + '/reviews/getReviews')
  }

  getUsers() {
    return this.http.get(adminUrl + '/access/getAccess')
  }

  getPlaylists() {
    return this.http.get(adminUrl + '/playlist/getPlaylists')
  }

  getAllPlaylistss() {
    return this.http.get(adminUrl + '/allPlaylists/getAllPlaylists')
  }

  addToPlaylist(playlistName: String,
    songTitle: string,
    songAlbum: String) {
    const obj = {
      name: playlistName,
      title: songTitle,
      album: songAlbum
    }
    return this.http.post(adminUrl + '/playlist/createPlaylists', obj).subscribe(res => console.log('Song Added to playlist'));
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
    return this.http.put(adminUrl + '/songs/update/' + id, obj).subscribe(res => console.log('Song Modified'));
  }
  postAccess(emailid: String,
    user: String) {
    const obj = {
      userid: emailid,
      token: user
    };
    this.http.post(adminUrl + '/reviews/createReview', obj).subscribe(res => console.log('Review Added'));
  }
}