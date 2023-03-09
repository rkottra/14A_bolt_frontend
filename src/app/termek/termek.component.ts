import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TermekModel } from '../models/termek-model';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.less']
})
export class TermekComponent implements OnInit {

  public termek:TermekModel = {
    nev :"", 
    ar : 0,
    kedvezmeny:0,
    id:0,
    kepUrl : "",
    leiras :""
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data:TermekModel) {
    this.termek = data;
  }

  ngOnInit(): void {
  }

}
