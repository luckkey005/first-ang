import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 a: any; b: any;
  constructor(private _Colorservice: ColorsService) {
    this._Colorservice.getData().subscribe( res => this.a=res[0]  );
    // console.log(_Colorservice.fromNet());
  }

   ngOnInit() {
    //  this._Colorservice.fromNet().subscribe(res=>{
    //   this.b=res; console.log(this.b);
    //  }) ;
  }

}
