import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
@Component({
  selector: 'app-tuyensinh',
  templateUrl: './tuyensinh.component.html',
  styleUrls: ['./tuyensinh.component.scss']
})
export class TuyensinhComponent implements OnInit {

  private apiUrl = '';
  data: Array<String> = [];
  listHidden = false;
  dsKhoa: Array<String> = [];
  sttLuat='5';
  Khoi='';
  Khoa='';
  rowHidden=false;

  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();
    this.rowHidden=false;
  

  }

  ngOnInit() {
  }

  getRulesXetTuyen() {
    this.http.get('http://webdatamining.somee.com/api/luatxettuyen/findrules?idLoailuat='+this.sttLuat+'&&keyword='+this.Khoa)
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
