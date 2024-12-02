import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface SalesInvoiceResponse {
	SalesInvoiceIds: number[];
}

@Injectable({
	providedIn: 'root'
})
export class MfinService {

	private apiKey = 'INVALID_API_KEY';
	private apiUrl = '/api/publicApi/get-unit-measures';
	private versionUrl = '/api/publicApi/getEfakturaVersion';
	private salesInvoiceIdsUrl = '/api/publicApi/sales-invoice/ids';
	private salesInvoiceUrl = '/api/publicApi/sales-invoice';
	private valueAddedTaxExemptionReasonList = '/api/publicApi/sales-invoice/getValueAddedTaxExemptionReasonList';

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

	getSalesInvoiceIds(status: string): Observable<SalesInvoiceResponse> {
		const headers = new HttpHeaders({
			'accept': 'text/plain',
			'ApiKey': this.apiKey,
		});
		const params = { status };

		return this.http.post<SalesInvoiceResponse>(this.salesInvoiceIdsUrl, { headers }, { params });
	}


	getSalesInvoice(invoiceId: string): Observable<any> {
		const headers = new HttpHeaders({
			'accept': '*/*',
			'ApiKey': this.apiKey,
		});
		const params = { invoiceId };

		return this.http.get<any>(this.salesInvoiceUrl, { headers, params });
	}

	getValueAddedTaxExemptionReasonList(): Observable<any> {
		const headers = new HttpHeaders({
			'accept': '*/*',
			'ApiKey': this.apiKey,
		});

		return this.http.get<any>(this.valueAddedTaxExemptionReasonList, { headers });
	}
}
