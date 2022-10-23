import { Component, OnInit } from '@angular/core';

interface CheckboxItem {
  color: string;
  selected: boolean;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  checkboxes: CheckboxItem[] = [
    {
      color: 'primary',
      selected: false,
    },
    {
      color: 'secondary',
      selected: true,
    },
    {
      color: 'tertiary',
      selected: false,
    },
    {
      color: 'success',
      selected: true,
    },
    {
      color: 'warning',
      selected: false,
    },
    {
      color: 'danger',
      selected: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(item: CheckboxItem): void {
    console.log(item);
  }

  submit(): void { console.log(this.checkboxes); }

}
