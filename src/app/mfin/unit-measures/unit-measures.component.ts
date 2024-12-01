import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MfinService } from '../services/mfin.service';

@Component({
  selector: 'app-unit-measures',
  standalone: false,
  
  templateUrl: './unit-measures.component.html',
  styleUrl: './unit-measures.component.scss'
})
export class UnitMeasuresComponent {
	title = 'Unit Measurements';
	unitMeasures: any;
	apiForm: FormGroup;

	constructor(private fb: FormBuilder, private apiService: MfinService) {
		this.apiForm = this.fb.group({
			apiKey: ['', Validators.required], // Form control with validation
		});
	}

	ngOnInit(): void { }

	fetchUnitMeasures(): void {
		this.apiService.getUnitMeasures().subscribe({
			next: (data) => {
				this.unitMeasures = data;
				console.log('Unit Measures:', this.unitMeasures);
			},
			error: (error) => {
				console.error('Error fetching unit measures:', error);
			},
		});
	}
}
