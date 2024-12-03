import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reason-dialog',
  template: `
    <h1 mat-dialog-title>Text Details</h1>
    <div mat-dialog-content>
      <p>{{ data.text }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [`
    mat-dialog-content {
      font-size: 16px;
    }
  `]
})
export class TextDisplayComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { text: string }) {}
}
