import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: any[] = [];

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
  ) { }

  ngOnInit() {
    this.jsonPlaceholderService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => console.error(error),
    })
  }

}
