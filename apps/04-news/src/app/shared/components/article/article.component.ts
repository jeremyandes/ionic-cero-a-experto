import { Component, Input } from '@angular/core';
import { Article } from '../../../interfaces/news-api.interface';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor(
    private inAppBrowser: InAppBrowser,
    private platform: Platform,
  ) { }

  openArticle(): void {
    console.log(this.platform.is('ios'));
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.inAppBrowser.create(this.article.url);
      browser.show();
    } else {
      window.open(this.article.url, '_blank');
    }

  }
}

