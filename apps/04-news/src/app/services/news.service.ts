import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsApiURL: string = 'https://newsapi.org/v2';
  private newsApiKey: string = '444ece9669264ae5a6678826caa1c258'; // Free API Key at https://newsapi.org/docs/get-started

  constructor(
    private http: HttpClient,
  ) { }

  public getTopHeadlines(): Observable<any> {
    // return this.http.get<any>(`${this.newsApiURL}/everything`, {
    //   params: {
    //     q: 'tesla',
    //     from: '2022-09-23',
    //     sortBy: 'publishedAt',
    //     apiKey: this.newsApiKey,
    //   }
    // });
    return this.http.get<any>(`${this.newsApiURL}/everything?q=tesla&from=2022-09-23&sortBy=publishedAt&apiKey=${this.newsApiKey}`);
  }
}
