import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  val:string='';
  constructor() { }

  updating(){
    document.getElementById('store').innerHTML= document.getElementById('store').innerHTML+'<br>'+this.val;
    (<HTMLInputElement>document.getElementById('sm')).value='';this.val='';
  }
  disp(){
    this.val=(<HTMLInputElement>document.getElementById('sm')).value;
  }
  ngOnInit() {
  }

}
