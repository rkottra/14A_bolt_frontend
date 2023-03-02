import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(public loginszerviz:LoginService) { }

  ngOnInit(): void {
  }

  Kilepes() {
    this.loginszerviz.logout();
  }

}
