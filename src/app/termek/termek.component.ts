import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TermekModel } from '../models/termek-model';
import { TermekService } from '../services/termek.service';

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

  constructor(
    private backend : TermekService,
    public dialogRef: MatDialogRef<TermekComponent>,
    @Inject(MAT_DIALOG_DATA) public data:TermekModel)
  {
    this.termek.nev = data.nev;
    this.termek.ar = data.ar;
    this.termek.kedvezmeny = data.kedvezmeny;
    this.termek.id = data.id;
    this.termek.kepUrl = data.kepUrl;
    this.termek.leiras = data.leiras;
  }

  ngOnInit(): void {
  }

  mentes() {
    this.data.nev = this.termek.nev;
    this.data.ar = this.termek.ar;
    this.data.kedvezmeny = this.termek.kedvezmeny;
    this.data.id = this.termek.id;
    this.data.kepUrl = this.termek.kepUrl;
    this.data.leiras = this.termek.leiras;

    this.backend.updateTermek(this.termek);

    this.dialogRef.close();
  }

}
