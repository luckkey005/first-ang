import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  a:any;
  constructor(private _Colorservice :ColorsService) {this.a=_Colorservice.getData(); }

  ngOnInit() {
  }
  
}
