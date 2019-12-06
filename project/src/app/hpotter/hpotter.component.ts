import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
// import { Songs } from '..../app/routes';
// import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-hpotter',
  templateUrl: './hpotter.component.html',
  styleUrls: ['./hpotter.component.scss']
})

export class HpotterComponent implements OnInit {

  allSongs: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getHpotter().subscribe(data => {
      this.allSongs = data;
      console.log(this.allSongs)
    });
  }

}
