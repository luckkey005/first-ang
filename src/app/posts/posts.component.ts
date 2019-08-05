import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
a: any;
  constructor(private _Colorservice: ColorsService) { 
    this._Colorservice.getData().subscribe( res => this.a=res[0]  ); }

  ngOnInit() {
  }

}
