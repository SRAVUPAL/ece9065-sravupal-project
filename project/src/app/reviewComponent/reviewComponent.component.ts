import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-reviewComponent',
  templateUrl: './reviewComponent.component.html',
  styleUrls: ['./reviewComponent.component.scss']
})
export class ReviewComponent implements OnInit {

  wizards: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

}
