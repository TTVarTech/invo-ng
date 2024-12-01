import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MfinService } from './services/mfin.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: false,
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'Angular API Call Example';
	unitMeasures: any;
	apiForm: FormGroup;

	constructor(private fb: FormBuilder, private apiService: MfinService) {
		this.apiForm = this.fb.group({
			apiKey: ['', Validators.required], // Form control with validation
		});
	}

	ngOnInit(): void { }

	fetchUnitMeasures(): void {
		if (this.apiForm.invalid) {
			alert('Please enter a valid API key!');
			return;
		}

		const apiKey = this.apiForm.value.apiKey; // Access API key from form group
		this.apiService.getUnitMeasures(apiKey).subscribe({
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