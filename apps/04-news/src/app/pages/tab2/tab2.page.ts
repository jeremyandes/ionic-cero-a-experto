import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/news-api.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  selectedCategory: string = 'business';
  topHeadlines: Article[] = [];

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.getHeadlines();
  }

  private getHeadlines() {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe({
      next: (response) => this.topHeadlines = response,
      error: (err) => console.error(err),
    });
  }

  segmentChanged(event: any) {
    const value = event.detail.value;
    console.log(value);
    this.selectedCategory = value;
    this.topHeadlines = [];
    this.getHeadlines();
  }

}
