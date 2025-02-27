import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = environment.apiUrl;

  // private apiUrl = 'http://127.0.0.1:5000/CreateCompany';

  constructor(private http: HttpClient,) { }

  SendMail(body:any) {
    return this.http.post(this.apiUrl + "api/contact_us/save_contact_us", body)
  }
}
