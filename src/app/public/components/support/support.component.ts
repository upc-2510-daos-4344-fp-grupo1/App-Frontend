import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatLabel} from '@angular/material/input';
import {MatDialog} from '@angular/material/dialog';
import {SupportDialogComponent} from '../support-dialog/support-dialog.component';

@Component({
  selector: 'app-support',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(SupportDialogComponent, {width: '250px'})
  }
}
