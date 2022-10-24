import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = 'business';

  constructor() { }

  segmentChanged(event: any) {
    const value = event.detail.value;
    console.log(value);
    this.selectedCategory = value;

  }

}
