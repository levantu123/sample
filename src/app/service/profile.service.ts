import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }
  getHeader(){
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }
  getUserDetailedProfileInfor() {
    return this.http.get(`v1/profile/info?detailed=true`, { headers: this.getHeader() });
  }
  getUserProfile() {
    return this.http.get(`v1/profile`, { headers: this.getHeader() });
  }
}
