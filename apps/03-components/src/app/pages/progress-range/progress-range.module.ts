import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressRangePageRoutingModule } from './progress-range-routing.module';

import { ProgressRangePage } from './progress-range.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressRangePageRoutingModule,
    SharedModule,
  ],
  declarations: [ProgressRangePage]
})
export class ProgressRangePageModule { }
