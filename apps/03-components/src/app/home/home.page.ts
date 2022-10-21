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
    {
      icon: 'beaker-outline',
      title: 'Avatar',
      routerLink: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      title: 'Buttons',
      routerLink: '/buttons',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
