import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputsPageRoutingModule } from './inputs-routing.module';

import { InputsPage } from './inputs.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [InputsPage]
})
export class InputsPageModule { }
