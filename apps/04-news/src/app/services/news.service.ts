import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopHeadlinesAll, TopHeadlinesEntertainment, TopHeadlinesHealth, TopHeadlinesScience, TopHeadlinesSports, TopHeadlinesTechnoloy, TopHeadlinesGeneral, TopHeadlinesBusiness } from '../utils/mock-data';
import { Article, NewsResponse } from '../interfaces/news-api.interface';
import { delay, map } from 'rxjs/operators'

interface CategoryMap {
  name: string;
  data: NewsResponse;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private categoriesMap: CategoryMap[] = [
    {
      name: 'business',
      data: TopHeadlinesBusiness,
    },
    {
      name: 'entertainment',
      data: TopHeadlinesEntertainment,
    },
    {
      name: 'general',
      data: TopHeadlinesGeneral,
    },
    {
      name: 'health',
      data: TopHeadlinesHealth,
    },
    {
      name: 'science',
      data: TopHeadlinesScience,
    },
    {
      name: 'sports',
      data: TopHeadlinesSports,
    },
    {
      name: 'technology',
      data: TopHeadlinesTechnoloy,
    },
  ];

  public getTopHeadlines(): Observable<Article[]> {
    return of(TopHeadlinesAll)
      .pipe(
        delay(1000),
        map(({ articles }) => articles),
      );
  }

  public getTopHeadlinesByCategory(categoryName: string): Observable<Article[]> {
    return of(this.categoriesMap.find(category => category.name === categoryName).data)
      .pipe(
        delay(1000),
        map(({ articles }) => articles),
      );
  }

}
