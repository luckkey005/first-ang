import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  a:any;

  constructor(data:ColorsService) { this.a=data.getData(); }

  ngOnInit() {
  }

}
