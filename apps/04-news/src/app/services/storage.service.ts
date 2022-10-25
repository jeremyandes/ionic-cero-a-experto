import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/news-api.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticles: Article[] = [];

  constructor(
    private storage: Storage,
  ) {
    this.init();
  }

  public get localArticles(): Article[] { return [...this._localArticles]; }

  async init(): Promise<void> {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  async saveRemoveArticle(article: Article): Promise<void> {
    const exists = this._localArticles.find(localArticle => localArticle.title === article.title);

    if (!!exists) {
      this._localArticles = this._localArticles.filter(localArticle => localArticle.title !== article.title);
    } else {
      this._localArticles = [article, ...this._localArticles];
    }

    await this._storage.set('articles', this._localArticles);
  }

  async loadFavorites(): Promise<Article[]> {
    try {
      const articles = await this._storage.get('articles');
      this._localArticles = articles || [];
      return this._localArticles;
    } catch (error) {
      console.error(error);
    }
  }
}
