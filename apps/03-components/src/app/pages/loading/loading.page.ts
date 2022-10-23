import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(
    private loadingController: LoadingController,
  ) { }

  ngOnInit(): void { }

  async showLoading() {
    await this.presentLoading('Loading...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }


  private async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message,
      spinner: 'circular'
    });

    await this.loading.present();
  }
}
