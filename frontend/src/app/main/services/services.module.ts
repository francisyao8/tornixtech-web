import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesPageComponent } from './services-page/services-page.component';
import { WebexpressComponent } from './webexpress/webexpress.component';

import { ServicesRoutingModule } from './services-routing.module';
import { MainRoutingModule } from '../main-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    // ServicesPageComponent,
    // WebexpressComponent,
  ],
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
