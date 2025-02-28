import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = environment.apiUrl;

  // private apiUrl = 'http://127.0.0.1:5000/contact_us';

  constructor(private http: HttpClient,) { }

  SendMail(body:any) {
    return this.http.post(this.apiUrl + "api/contact_us/save_contact_us", body)
  }
}
