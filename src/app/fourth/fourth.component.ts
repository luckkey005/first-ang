import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/colors.service';
import { style, animate, trigger, transition, state } from '@angular/animations';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { RouterState } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
  providers: [ColorsService]
})
export class FourthComponent implements OnInit {
 a: any; 
  constructor(private _ColorService: ColorsService) { }

  ngOnInit() {
   
  this._ColorService.getData().subscribe( res => this.a=res[0]  );

  }

}
