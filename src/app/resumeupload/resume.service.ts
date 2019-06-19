/* Created by Christy 
Resume Parser project  service for resume parse

*/
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ResumeService{

    headers: Headers;

    constructor(private _http: Http) {

		this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json;  multipart/form-data'); //'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        this.headers.append('Accept', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
	}

    

    public parseResume(): Observable<any[]> {
		
		let requestOptions = new RequestOptions();
		requestOptions.headers = this.headers;
		return this._http
			.get( 'http://localhost:8082/hsi/cvparse/candidateDetails/displayAllCandidateDetails', requestOptions)
			.map(this.extractData)
			.catch(this.handleError);
    }
    
    private extractData(res: Response) {
		let body = res.json();
		return body;
	}

	private extractResponseData(res: Response) {
		return res.text();
	}

	private handleError(error: any) {
		let err = error.json();
		let errMsg = (err.message) ? err.message :
			err.status ? `${err.status} - ${err.statusText}` : error;
		return Observable.throw(errMsg);
	}

}