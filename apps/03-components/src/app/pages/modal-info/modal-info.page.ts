import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() name: string = '';
  @Input() flag: boolean = false;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.name, this.flag);
  }

  closeWithoutArguments(): void {
    this.modalController.dismiss();
  }

  closeWithArguments(): void {
    this.modalController.dismiss({
      lastName: 'Andes',
      country: 'Argentina',
    });
  }

}
