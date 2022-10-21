import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { MenuItem } from './interfaces/menu-item.interface';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private dataService: DataService,
    private menuController: MenuController,
  ) { }

  ngOnInit(): void {
    this.dataService.getMenuOptions().subscribe({
      next: (response) => { this.menuItems = response; },
      error: (error) => console.error(error),
    })
  }

  closeMenu(): void {
    this.menuController.close('default');
  }
}
