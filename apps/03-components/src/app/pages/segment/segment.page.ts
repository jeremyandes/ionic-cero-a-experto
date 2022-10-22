import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superheroes: any[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getSuperheroes().subscribe({
      next: (response) => {
        console.log(response);
        this.superheroes = response;
      },
      error: (error) => console.error(error),
    })
  }

  segmentChanged(event: any) {
    console.log(event);
  }
}
