import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { MainRoutingModule } from '../main-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MainRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    // ServicesModule,
    // RegisterComponent
  ]
})
export class ServicesModule { }
