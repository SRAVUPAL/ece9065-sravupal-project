import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.scss']
})
export class GotComponent implements OnInit {

  name: string = '';
  description: string = '';
  due: string = '';
  quantity: number = null;

  // Hrequest: string[] = name;

  // requests: Object;

  constructor(private _http: HttpService, private http: HttpClient) { }

  ngOnInit() { }

  submitRequest(Name, Description, Due, Quantity) {
    
    this.http.post('http://localhost:3000/api/items/', {
      name: Name,
      description: Description,
      due: Due,
      quantity: Quantity
    }).subscribe(data => {
      console.log(data)
    });
  }
}