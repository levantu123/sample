import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  constructor(private http: HttpClient) { }
  getHeader(){
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }
  getAllGoal(){
    return this.http.get(`goals/search/findByOwner?owner=${localStorage.getItem("customerId")}`, { headers: this.getHeader() });
  }
  createGoal( goal: any){
    return this.http.post(`goals`, goal, { headers: this.getHeader() });
  }
}
