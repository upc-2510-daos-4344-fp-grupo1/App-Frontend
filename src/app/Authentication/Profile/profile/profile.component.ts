import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: [{ value: '', disabled: true }],
      idType: [{ value: '', disabled: true }],
      idNumber: [{ value: '', disabled: true }],
      phoneNumber: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }]
    });
  }

  toggleEdit(): void {
    if (this.profileForm.disabled) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
      // Aquí podrías agregar lógica para guardar los cambios
      console.log('Datos guardados:', this.profileForm.value);
    }
  }
}
