import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  characters: string[] = ['Aquaman', 'Superman', 'Flash', 'Batman', 'Wonder Woman', 'Batman'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event: any) {
    console.log(event);

    const itemMoved = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, itemMoved);

    event.detail.complete();

    console.log(this.characters);
  }

}
