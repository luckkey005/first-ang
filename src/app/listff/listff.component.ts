import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listff',
  templateUrl: './listff.component.html',
  styleUrls: ['./listff.component.css']
})

export class ListffComponent implements OnInit {
// courses:any[]; subscription;
courses$; // where $ at the end showing that it is a observable
// course$:AngularFireList<any[]>;
  constructor( db: AngularFireDatabase) {
    this.courses$ = db.list('/').valueChanges();
    // this.course$=db.object('/6');

    // this.subscription = db.list('/').valueChanges()
    // .subscribe((courses)=>
    //   {      this.courses=courses;console.log(this.courses);
    // });
  }

  ngOnInit() {
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  add(course: HTMLInputElement) {
    // this.course$.push(course.value); course.value="";
  }

}
