import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-hpotter',
  templateUrl: './hpotter.component.html',
  styleUrls: ['./hpotter.component.scss']
})
export class HpotterComponent implements OnInit {

  wizards: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getHpotter().subscribe(data => {
      this.wizards = data;
      console.log(this.wizards)
    });
  }

}
