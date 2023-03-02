import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public token:string = "";

  constructor(private http:HttpClient) { }


  login(email: string, password: string) {
    this.token = "";

    this.http.post("http://localhost:8000/api/login", {
      'email': email, 'password': password
    }).subscribe( (data:any) =>{
      this.token = data.token;
    });
  }

  logout() {
    this.token = "";
  }

}
