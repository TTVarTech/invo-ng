import { Component, OnInit } from '@angular/core';
import { MfinService } from '../services/mfin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health-check',
  standalone: false,
  
  templateUrl: './health-check.component.html',
  styleUrl: './health-check.component.scss'
})
export class HealthCheckComponent implements OnInit {
  version: string | null = null;
  apiKey: string = ''; // Initialize the apiKey property

	apiForm: FormGroup;

	constructor(private fb: FormBuilder, private apiService: MfinService) {
		this.apiForm = this.fb.group({
			apiKey: ['', Validators.required], // Form control with validation
		});
	}

  ngOnInit(): void {
  }

  fetchUnitMeasures(): void {
		if (this.apiForm.invalid) {
			alert('Please enter a valid API key!');
			return;
		}

		const apiKey = this.apiForm.value.apiKey; // Access API key from form group
    this.apiService.getEfakturaVersion(apiKey).subscribe({
      next: (data) => {
        this.version = data.Version;
      },
      error: (error) => {
        console.error('Error fetching version:', error);
        this.version = 'Unknown';
      },
    });
	}
}
