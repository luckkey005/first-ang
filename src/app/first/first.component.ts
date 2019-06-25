import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  users:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users').subscribe((res:{})=>{
      this.users=res;
    }  )
  }

}
