import { Component, Input } from '@angular/core';
import { Article } from '../../../interfaces/news-api.interface';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

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
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
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

  async openMenu(): Promise<void> {
    const buttons: ActionSheetButton[] = [
      {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => this.toggleFavorite(),
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
      },
    ];

    const shareButton: ActionSheetButton = {
      text: 'Share',
      icon: 'share-outline',
      handler: () => this.shareArticle(),
    };

    if (this.platform.is('capacitor')) {
      buttons.unshift(shareButton);
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons,
    })

    await actionSheet.present();
  }

  async shareArticle(): Promise<void> {
    console.log('Share article');
    const { title, source, url } = this.article;

    this.socialSharing.share(
      title,
      source.name,
      null,
      url
    )
  }

  toggleFavorite(): void {
    console.log('Favorite toggle');
  }
}

