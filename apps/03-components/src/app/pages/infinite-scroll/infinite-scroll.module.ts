import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';

import { InfiniteScrollPage } from './infinite-scroll.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollPageRoutingModule,
    SharedModule,
  ],
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule { }
