import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public email    : string = "kottra.richard@jedlik.eu";
  public password : string = "";

  constructor(public loginszerviz:LoginService) { }

  ngOnInit(): void {
  }

  Belepes() {
    this.loginszerviz.login(this.email, this.password);
  }

}
