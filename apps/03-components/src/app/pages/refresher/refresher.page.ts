import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items: any[] = Array(5);

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any) {
    console.log(event);

    setTimeout(() => {
      this.items = Array(50);
      event.target.complete();
    }, 2000)
  }

}
