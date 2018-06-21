import { Injectable } from '@angular/core';
import { Http, JsonpModule, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  results: string[];
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {  }
  search(query: string): Promise<any> {
    let url = window.location.href;
    if (url.search('localhost:4200') != -1 ) {
      url = 'https://wlsdev1.gfs.com:7102/ZapWeb/';
    }
    // Make the HTTP request:
    url = url + 'search?' + query + '*';
    console.log(url);
    return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
