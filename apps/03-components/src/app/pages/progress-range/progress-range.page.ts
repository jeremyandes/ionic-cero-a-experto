import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-range',
  templateUrl: './progress-range.page.html',
  styleUrls: ['./progress-range.page.scss'],
})
export class ProgressRangePage implements OnInit {
  percent: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: any) {
    this.percent = event.detail.value / 100;
  }

}
