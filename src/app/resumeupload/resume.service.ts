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
	}
	
    public uploadFileService(pathUrl:string) {
		let params: URLSearchParams = new URLSearchParams();
		params.set('filePath', pathUrl);

		let requestOptions = new RequestOptions();
		requestOptions.headers = this.headers;
		requestOptions.search = params;
		return this._http.get('http://localhost:8080/v1/convertToCSV',requestOptions)
			.map(this.extractResponseData)
			.catch(this.handleError);
	}

	public getCandidateDetails(parsePathUrl:string) {
		let params: URLSearchParams = new URLSearchParams();
		params.set('filePath', parsePathUrl);

		let requestOptions = new RequestOptions();
		requestOptions.headers = this.headers;
		requestOptions.search = params;
		return this._http.get('http://localhost:8080/v1/getCandidateDetails',requestOptions)
			.map(this.extractData)
			.catch(this.handleError);
	}

	

    public parseResume(): Observable<any[]> {
		
		let requestOptions = new RequestOptions();
		requestOptions.headers = this.headers;
		return this._http
			.get( 'localhost:8080/v1/displayAllCandidateDetails', requestOptions)
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