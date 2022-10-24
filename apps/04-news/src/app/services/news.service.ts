import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopHeadlinesMock } from '../utils/mock-data';
import { NewsResponse, Article } from '../interfaces/news-api.interface';
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public getTopHeadlines(): Observable<Article[]> {
    return of(TopHeadlinesMock)
      .pipe(
        delay(1000),
        map(({ articles }) => articles),
      );
  }

}
