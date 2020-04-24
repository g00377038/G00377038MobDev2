import { Injectable } from '@angular/core';

//import to use http
import {HttpClient} from '@angular/common/http';

//import to call getNews() asynchronously
import {Observable} from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getNews():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=c9e28badf06242ef97d4e16f542c7458');
  }
}
