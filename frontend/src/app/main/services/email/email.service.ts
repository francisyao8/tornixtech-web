import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private apiUrl = '/finance-api/create_lead';
  private apiUrl = 'https://finances.tornixtech.com/api/leads/create_lead';
  // private apiUrl = environment.apiUrl;
  // private apiUrl = 'http://127.0.0.1:5000/contact_us';

  constructor(private http: HttpClient,) { }

  createLead(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
