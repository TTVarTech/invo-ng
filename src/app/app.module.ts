import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitMeasuresComponent } from './mfin/unit-measures/unit-measures.component';
import { HealthCheckComponent } from './mfin/health-check/health-check.component';

@NgModule({
	declarations: [
		AppComponent,
  UnitMeasuresComponent,
  HealthCheckComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [provideHttpClient()],
	bootstrap: [AppComponent]
})
export class AppModule { }
