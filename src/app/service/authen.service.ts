import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(private http: HttpClient) { }
  authen(code: string) {
    const body = new HttpParams()
      .set('client_id', "levantu")
      .set('client_secret', "839027a5-3670-497c-a2c4-d09951d7fedb")
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', "http://localhost:8080/login");
    this.http.post("auth/realms/soba/protocol/openid-connect/token", body.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }).subscribe(data => {
        localStorage.setItem("token", data['access_token'])
      })
  }

  grantToken() {
    this.http.get("getPermission").subscribe(data => {
      console.log(data);
      localStorage.setItem("token", data['details']['tokenValue'])
      localStorage.setItem("customerId", data['userAuthentication']['details']['customer_id'])
    })
  }

}
