import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  a:any; sub="hidden";

  constructor(data:ColorsService) { this.a=data.getData(); }

  ngOnInit() {
  }
  submiting(f){  
    // const a=JSON.stringify(f.value); 
    console.log(f.value);
    this.sub="visible";
  }

}
