import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Alert with multiple buttons!',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('OK Click') },
        },
        {
          text: 'Cancel',
          handler: () => { console.log('Cancel Click') },
          role: 'cancel',
          cssClass: 'red-text'
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlertInputs() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Submit',
          handler: (data) => {
            console.log('Submit clicked!', data);
          }
        }
      ],
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          type: 'text',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'birthday',
          type: 'date',
          placeholder: 'Birthday',
          min: '1950-01-01',
          max: new Date().toISOString().split('T')[0],
        },
        {
          name: 'info',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
