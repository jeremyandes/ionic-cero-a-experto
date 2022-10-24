import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/news-api.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  topHeadlines: Article[] = [];

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe({
      next: (response) => {
        this.topHeadlines = response;
        console.log(this.topHeadlines);
      },
      error: (err) => console.error(err),
    })
  }
}
