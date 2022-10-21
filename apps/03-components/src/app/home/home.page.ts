import { Component, OnInit } from '@angular/core';

interface ComponentItem {
  icon: string;
  title: string;
  routerLink: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: ComponentItem[] = [
    {
      icon: 'american-football-outline',
      title: 'Action Sheet',
      routerLink: '/action-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      title: 'Alert',
      routerLink: '/alert',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
