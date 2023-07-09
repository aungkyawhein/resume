import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    {
      name: 'View',
      url: '/view'
    },
    {
      name: 'Edit',
      url: '/edit'
    }
  ];
}
