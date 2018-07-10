import { Injectable } from '@angular/core';
import { Http, JsonpModule, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  results: string[];
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {this.start(4);}
  start(numPlayers: number){
    let url = 'http://localhost:8080/start?numPlayers=' + numPlayers; 
    console.log(url);
	 this.http.get(url)
    }
  
  createPlayer(color: string, race: string) {
    let url = 'http://localhost:8080/create/' + color + '/' + race;
    console.log(url);
    return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}