import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
	standalone: false,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss'
})
export class AuthComponent {
	toastCollector: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService) {
		this.toastCollector = this.fb.group({
			sneakyNoodle: ['', [Validators.required]],
			jellyShield: ['', [Validators.required]]
		});
	}

	onSubmit(): void {
		if (this.toastCollector.valid) {
			const { sneakyNoodle, jellyShield } = this.toastCollector.value;
			this.authService.login({ sneakyNoodle, jellyShield });
		}
	}
}
