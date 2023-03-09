import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TermekModel } from '../models/termek-model';
import { LoginService } from '../services/login.service';
import { TermekService } from '../services/termek.service';
import { TermekComponent } from '../termek/termek.component';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.less']
})
export class TermekekComponent implements OnInit {
  public termekek : MatTableDataSource<TermekModel> = new MatTableDataSource<TermekModel>();
  displayedColumns: string[] = ['gombok', 'nev', 'leiras', 'ar', 'kepUrl'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private backend     : TermekService, 
              public  loginszerviz: LoginService,
              public  dialog      : MatDialog) { 
    
    this.backend.getAllTermekek().subscribe(data => {
      this.termekek.data  = data;
      this.termekek.paginator = this.paginator;
      this.termekek.sort = this.sort;
    });
  }

  ngOnInit(): void {
  }

  szerkesztes(termek:TermekModel) {
    const dialogRef = this.dialog.open(TermekComponent, {
      data: termek
    });

  }
}
