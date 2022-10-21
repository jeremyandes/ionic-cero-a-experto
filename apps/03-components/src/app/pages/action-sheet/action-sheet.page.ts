import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  onClick(): void {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action Sheet custom',
      subHeader: 'Tiene un subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          cssClass: 'red-text',
          icon: 'trash-outline',
          handler: () => {
            console.log('Delete clicked!');
          }
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          icon: 'share-outline',
          handler: () => {
            console.log('Share clicked!');
          }
        },
        {
          text: 'Play',
          data: {
            action: 'play',
          },
          icon: 'play-outline',
          handler: () => {
            console.log('Play clicked!');
          }
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
  }

}
