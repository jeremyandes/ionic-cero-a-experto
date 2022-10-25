import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/news-api.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private storageService: StorageService,
  ) { }

  get articles(): Article[] { return this.storageService.localArticles; }

  

}
