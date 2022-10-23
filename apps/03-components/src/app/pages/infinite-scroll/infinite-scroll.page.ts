import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild('infScroll') infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    console.log(this.infiniteScroll);

    setTimeout(() => {
      if (this.data.length > 45) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArray = Array(10);
      this.data.push(...newArray);

      this.infiniteScroll.complete();
    }, 1500)
  }

}
