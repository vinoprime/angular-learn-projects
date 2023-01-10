import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-pipe';

  users = [
    {
      name: "Vinoth",
      email: "v@mail.com",
      role: "emp"
    },
    {
      name: "Pramod",
      email: "p@mail.com",
      role: "buddy"
    },
    {
      name: "Jegadesh",
      email: "j@mail.com",
      role: "admin"
    }
  ]
  searchTerm: string = "ad";

  constructor() {

  }
}
