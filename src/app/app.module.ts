import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthCheckComponent } from './mfin/health-check/health-check.component';
import { UnitMeasuresComponent } from './mfin/unit-measures/unit-measures.component';
import { LawOverviewComponent } from './mfin/invoices/law-overview/law-overview.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthComponent } from './auth/auth.component';
import { provideRouter } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		UnitMeasuresComponent,
		HealthCheckComponent,
  LawOverviewComponent,
  AuthComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MatTableModule,
		MatButtonModule,
		MatDialogModule
	],
	providers: [provideHttpClient(), provideAnimationsAsync()],
	bootstrap: [AppComponent]
})
export class AppModule { }
