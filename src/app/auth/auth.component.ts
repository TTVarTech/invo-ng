import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	standalone: false,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss'
})
export class AuthComponent {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			sneakyNoodle: ['', [Validators.required]],
			jellyShield: ['', [Validators.required]]
		});
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			const { sneakyNoodle, jellyShield } = this.loginForm.value;
			console.log('Login attempt:', { sneakyNoodle, jellyShield });
		}
	}
}
