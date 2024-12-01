import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MfinService {

	private apiUrl = 'https://demoefaktura.mfin.gov.rs/api/publicApi/get-unit-measures';

	constructor(private http: HttpClient) { }

	getUnitMeasures(apiKey: string): Observable<any> {
		const headers = new HttpHeaders({
		  'accept': '*/*',
		  'ApiKey': apiKey,
		});
	
		return this.http.get<any>(this.apiUrl, { headers });
	  }
}
