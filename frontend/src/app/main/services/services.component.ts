import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment/payment.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './services.module';

// import { ServicesPageComponent } from './services-page/services-page.component';
// import { WebexpressComponent } from './webexpress/webexpress.component';

@Component({
  selector: 'app-services',
  imports: [
    RouterModule, 
    ReactiveFormsModule, 
    CommonModule, 
    ServicesModule, 
    // ServicesPageComponent, 
    // WebexpressComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
