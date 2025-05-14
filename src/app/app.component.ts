import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from '../public/navbar/navbar.component';



@Component({
  selector: 'app-root',

  imports: [RouterOutlet, NavbarComponent, NavbarComponent],
=======
  imports: [
    RouterOutlet
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-frontend';
}