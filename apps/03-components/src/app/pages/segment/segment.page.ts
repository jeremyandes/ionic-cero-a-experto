import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  selectedSegment: string = '';
  superheroes: any[] = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getSuperheroes().subscribe({
      next: (response) => {
        console.log(response);
        this.sortHeroes(response);
      },
      error: (error) => console.error(error),
    })
  }

  private sortHeroes(response: any[]) {
    this.superheroes = [...response].sort((a: any, b: any) => a.superhero < b.superhero ? -1 : 1);
  }

  segmentChanged(event: any) {
    const value = event.detail.value;
    console.log('Selected segment:', value);
    this.selectedSegment = value;
  }
}
