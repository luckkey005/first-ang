import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  ls: string[] = ['Hai', 'Namaste', 'Welcome', 'Adab', 'Sasrekal', 'Salam'];
   cur = 123.56987;
  isSelected = true;
  constructor() { }

  ngOnInit() {
  }

}
