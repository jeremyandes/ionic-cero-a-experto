import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Toast example',
      duration: 3000,
      position: 'bottom'
    })
    await toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Click to close',
      message: 'Toast example with options',
      duration: 3000,
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'heart',
          text: 'Favorite',
          handler: () => console.log('Favorite clicked'),
        },
        {
          side: 'end',
          icon: 'trash',
          text: 'Cancel',
          handler: () => console.log('Cancel clicked'),
        },
      ]

    })
    await toast.present();
  }
}
