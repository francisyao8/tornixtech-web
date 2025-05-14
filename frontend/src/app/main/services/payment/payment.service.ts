import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
// import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.apiUrl
  
  api_url = 'https://payments.tornixtech.com/';
  
  constructor(private http: HttpClient,) { }
  
  CreatePaymentPlan(body: any) {
    return this.http.post(this.apiUrl + "api/payment_services/create_payment", body)
  }

  CreatePaymentGetway(body: any) {
    return this.http.post(this.api_url + "api/payment/create_process_payment", body)
  }
  
}
