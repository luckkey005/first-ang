import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 a:any;
  constructor(private _Colorservice :ColorsService) {this.a=_Colorservice.getData(); }

   ngOnInit() {
  }

}
