import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';	
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login';
  email: string = '';
  password: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerconfirmPassword: string = '';
  register(){

  }
  login(){
    if(this.email == 'admin' && this.password == 'admin'){
      alert('Login Success');
    }
  }

}
