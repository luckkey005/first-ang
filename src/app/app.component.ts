import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular'; 
  navbarCollapsed = true;

toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}
}
 