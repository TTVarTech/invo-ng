import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MfinService {

	private apiKey = 'INVALID_API_KEY';
	private apiUrl = '/api/publicApi/get-unit-measures';
	private versionUrl = '/api/publicApi/getEfakturaVersion';

	constructor(private http: HttpClient) { }

	getEfakturaVersion(key: string): Observable<{ Version: string }> {
		this.apiKey = key;
		const headers = new HttpHeaders({
			'accept': '*/*',
			'ApiKey': this.apiKey,
		});

		return this.http.get<{ Version: string }>(this.versionUrl, { headers });
	}

	getUnitMeasures(): Observable<any> {
		const headers = new HttpHeaders({
			'accept': '*/*',
			'ApiKey': this.apiKey,
		});

		return this.http.get<any>(this.apiUrl, { headers });
	}
}
