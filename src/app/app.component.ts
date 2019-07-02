import { Component } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular'; 
  navbarCollapsed = true;  
  // info:any;

  // constructor(color :ColorsService){this.info=color.getData();}

toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}

collapse(){  this.navbarCollapsed=true;  }
}
 