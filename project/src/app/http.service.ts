import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }
  getHpotter() {
    return this.http.get('http://localhost:3000/admin/songs')
  }
  postHpotter(Hrequest) {
    // return this.http.post('http://localhost:3000/api/items/', Hrequest)
  }
}

