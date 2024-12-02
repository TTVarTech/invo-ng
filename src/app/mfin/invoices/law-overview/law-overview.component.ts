import { Component } from '@angular/core';

@Component({
  selector: 'app-law-overview',
  standalone: false,
  
  templateUrl: './law-overview.component.html',
  styleUrl: './law-overview.component.scss'
})
export class LawOverviewComponent {
  displayedColumns: string[] = [
    'ReasonId', 'Key', 'Law', 'Article', 'Paragraph', 'Point', 'Subpoint',
    'FreeFormNote', 'ActiveFrom', 'ActiveTo', 'Category', 'Text'
  ];
  
  dataSource = [
    {
      ReasonId: 1,
      Key: 'PDV-RS-10-2-1',
      Law: 'Zakon o Porezu na dodatu vrednost',
      Article: '10',
      Paragraph: '2',
      Point: '1',
      Subpoint: null,
      FreeFormNote: null,
      ActiveFrom: '1900-01-01T00:00:00.0000000+00:00',
      ActiveTo: null,
      Category: 'AE',
      Text: 'something to test'
    }
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(text: string): void {
    this.dialog.open(ReasonDialogComponent, {
      data: { text },
      width: '80%',
      height: '80%'
    });
  }
}
