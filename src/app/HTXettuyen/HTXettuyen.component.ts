import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForOf } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-HTXettuyen',
  templateUrl: './HTXettuyen.component.html',
  styleUrls: ['./HTXettuyen.component.scss']
})





export class HTXettuyenComponent implements OnInit {



  private apiUrl = '';
  sttLuat = '5';
  data: Array<String> = [];
  listHidden = false;
  dsKhoa: Array<String> = [];
  selectkhoa = '';
  x = 0;

  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();
  }



  ngOnInit() {
  }


  getRulesXetTuyen() {
    this.http.get('http://webdatamining.somee.com/api/luatxettuyen/findrules?idLoailuat=' + this.sttLuat + '&&keyword=' + this.selectkhoa)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    this.listHidden = true;


  }

  getDsKhoa() {
    this.http.get('http://webdatamining.somee.com/api/data/getallkhoa')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsKhoa = resJson)
      .catch(err => console.log(err));

  }


}
