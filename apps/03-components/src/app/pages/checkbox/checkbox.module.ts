import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';

import { CheckboxPage } from './checkbox.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule,
    SharedModule,
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule { }
