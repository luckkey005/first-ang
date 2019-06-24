import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/colors.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
  providers:[ColorsService]
})
export class FourthComponent implements OnInit {
 a:any;
  constructor(private _ColorService:ColorsService) {  }

  ngOnInit() {
  this.a= this._ColorService.getData();
  }

}
