import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albums: any[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe({
      next: (response) => {
        console.log(response);
        this.albums = response;
      },
      error: (error) => console.error(error),
    })
  }

  onSearchChange(event: any) {
    this.dataService.getAlbums().subscribe({
      next: (response) => {
        console.log(response);
        this.albums = response;
      },
      error: (error) => console.error(error),
    })
  }

}
