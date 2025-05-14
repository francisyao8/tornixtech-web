import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private apiUrl = 'https://finances.tornixtech.com/api/leads/create_lead';

  constructor(private http: HttpClient) { }

  createLead(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
