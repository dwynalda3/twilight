import { Injectable } from '@angular/core';
import { Http, JsonpModule, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  results: string[];
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {  }
  start(numPlayers: number){
    let url = 'http://localhost:8080/twilightServer/start?' + numPlayers; 
    console.log(url);
return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);
    }
  
  submit(color: string, race: string) {
    let url = 'http://localhost:8080/twilightServer/'; 
    url = url + color + '/' + race;
    console.log(url);
    this.http.get(url);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}