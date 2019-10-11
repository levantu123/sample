import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestService {
  constructor(private http: HttpClient) { }
  getHeader(){
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }
  getAllInvest(){
    return this.http.get(`invests/search/findByOwner?owner=${localStorage.getItem("customerId")}`, { headers: this.getHeader() });
  }
  createInvest( goal: any){
    return this.http.post(`invests`, goal, { headers: this.getHeader() });
  }
}
