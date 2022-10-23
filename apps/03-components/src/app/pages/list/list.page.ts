import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('list') list: IonList;

  users: any[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.dataService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => console.error(error),
    });
  }

  favorite(user: any) {
    console.log('favorite', user);
    this.list.closeSlidingItems();
  }
  share(user: any) {
    console.log('share', user);
    this.list.closeSlidingItems();
  }
  delete(user: any) {
    console.log('delete', user);
    this.list.closeSlidingItems();
  }

}
