import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 a:any; 
  constructor(private _Colorservice :ColorsService) {this.a=_Colorservice.getData(); console.log(_Colorservice.fromNet());}

   ngOnInit() { 
  }

}
