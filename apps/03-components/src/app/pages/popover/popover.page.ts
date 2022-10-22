import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/shared/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  async showPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event,
      translucent: true,
      backdropDismiss: false,
    })

    return await popover.present()
  }

}
