import {Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CdkTrapFocus} from '@angular/cdk/a11y';

@Component({
  selector: 'app-support-dialog',
  imports: [MatDialogModule, MatButtonModule, MatDialogClose],
  templateUrl: './support-dialog.component.html',
  styleUrl: './support-dialog.component.css'
})
export class SupportDialogComponent {
  readonly dialogRef = inject(MatDialogRef<SupportDialogComponent>);
}
