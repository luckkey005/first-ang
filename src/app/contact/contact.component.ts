import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  a: any; sub = 'hidden'; data: any;
  p = { userId: 11,
  id: 11,
  title: '',
  body: ''
};

  constructor(private _Colorservice: ColorsService, protected http: HttpClient) {  
    this._Colorservice.getData().subscribe( res => this.a=res[0]  );  }

  ngOnInit() {
  }
  submiting(f) {
    // const a=JSON.stringify(f.value);
    this.p.body = f.value.email;
    this.p.title = f.value.comments;
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.p, )
    .toPromise().then(data => {this.data = data; });
    console.log(this.data);
    this.sub = 'visible';

    
  }

}
