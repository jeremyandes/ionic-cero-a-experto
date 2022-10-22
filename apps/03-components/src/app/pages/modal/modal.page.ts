import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name: string = 'Jeremy';
  flag: boolean = false;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: this.name,
        flag: this.flag,
      }
    })

    await modal.present();

    // const response = await modal.onDidDismiss(); // Se dispara al terminar de cerrar el modal.
    const response = await modal.onWillDismiss(); // Se dispara apenas comienza a cerrarse el modal.
    console.log(response.data);
  }

}
