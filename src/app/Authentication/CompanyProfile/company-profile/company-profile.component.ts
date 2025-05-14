import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent implements OnInit {
  companyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: [{ value: '', disabled: true }],
      legalType: [{ value: '', disabled: true }],
      rucNumber: [{ value: '', disabled: true }],
      sector: [{ value: '', disabled: true }],
      personInCharge: [{ value: '', disabled: true }]
    });
  }

  toggleEdit(): void {
    if (this.companyForm.disabled) {
      this.companyForm.enable();
    } else {
      this.companyForm.disable();
      console.log('Datos de empresa guardados:', this.companyForm.value);
    }
  }
}
