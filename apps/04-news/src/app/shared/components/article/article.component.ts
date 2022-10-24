import { Component, Input } from '@angular/core';
import { Article } from '../../../interfaces/news-api.interface';
import { StorageService } from '../../../services/storage.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() index: number;

  constructor(
    private platform: Platform,
    private inAppBrowser: InAppBrowser,
    private socialSharing: SocialSharing,
    private storageService: StorageService,
    private actionSheetController: ActionSheetController,
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
    this.storageService.saveRemoveArticle(this.article);
  }
}

