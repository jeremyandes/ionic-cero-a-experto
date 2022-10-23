import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: MenuItem[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  // showMenu(): void {
  //   this.menuController.open('default');
  // }

}
