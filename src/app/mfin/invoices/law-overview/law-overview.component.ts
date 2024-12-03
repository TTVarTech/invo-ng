import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextDisplayComponent } from '../../../common/text-display/text-display.component';
import { MfinService } from '../../services/mfin.service';

@Component({
  selector: 'app-law-overview',
  standalone: false,
  
  templateUrl: './law-overview.component.html',
  styleUrl: './law-overview.component.scss'
})
export class LawOverviewComponent {
  title: string = "Laws"

  displayedColumns: string[] = [
    'ReasonId', 'Key', 'Law', 'Article', 'Paragraph', 'Point', 'Subpoint',
    'FreeFormNote', 'ActiveFrom', 'ActiveTo', 'Category',
    'TextPreview',  'Text'
  ];
  
  dataSource = [
  ];

  constructor(private dialog: MatDialog, private apiService: MfinService) {}

  fetchLaws(): void {
		this.apiService.getValueAddedTaxExemptionReasonList().subscribe({
			next: (data) => {
				this.dataSource = data;
			},
			error: (error) => {
				console.error('Error fetching unit measures:', error);
			},
		});
	}

  openDialog(text: string): void {
    this.dialog.open(TextDisplayComponent, {
      data: { text },
      width: '80%',
      height: '80%'
    });
  }
}
