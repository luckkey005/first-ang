import { Component, OnInit ,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  @Output() change= new EventEmitter();
  @Input() isFavorite :boolean=true;
  
  constructor() { }

  ngOnInit() {
  }
  onFavoriteChanged(){
    this.change.emit();
  }  

}
