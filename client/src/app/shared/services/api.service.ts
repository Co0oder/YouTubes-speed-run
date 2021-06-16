import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient){}

	public get<ResBody>(url: string): Observable<ResBody> {
		return this.http.get<ResBody>(url);
	}
	
	public post<ResBody, ReqBody>(url: string, body: ReqBody): Observable<ResBody> {
		return this.http.post<ResBody>(url,body);
	}
}