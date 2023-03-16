import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { TermekModel } from '../models/termek-model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TermekService {
  

  constructor(private http: HttpClient, private backend: LoginService) { }

  getAllTermekek():Observable<TermekModel[]> {
    return this.http.get<TermekModel[]>("http://localhost:8000/api/termek");
  }

  updateTermek(termek: TermekModel) {
    const headers = new HttpHeaders( {
      "content-type": "application/json",
      "Authorization": "Bearer "+this.backend.token,
    });
    this.http.put("http://localhost:8000/api/termek/"+termek.id, termek, {headers}).subscribe();
  }
}
