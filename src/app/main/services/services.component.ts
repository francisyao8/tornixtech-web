import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment/payment.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  data: any;
  is_loading: boolean = false;

  constructor(
    private paymentservice: PaymentService
  ) { }

  ngOnInit(): void { }
}
