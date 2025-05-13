import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './notifications-settings.component.html',
  styleUrls: ['./notifications-settings.component.css']
})
export class NotificationsSettingsComponent {
  notificationsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notificationsForm = this.fb.group({
      email: [false],
      sms: [false]
    });
  }

  saveSettings() {
    console.log(this.notificationsForm.value);
    alert('Configuraciones guardadas!');
  }
}