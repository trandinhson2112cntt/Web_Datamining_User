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
  sttLuat = '5';
  Khoi = '';
  Khoa = '';
  KhoiA = false;
  Mon1 = "";
  Mon2 = "";
  Mon3 = "";



  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();

  }

  ngOnInit() {
  }
  ChonKhoi() {
    switch (this.Khoi) {
      case 'A': {
        this.KhoiA = true;
        this.Mon1 = "Toán";
        this.Mon2 = "Lý";
        this.Mon3 = "Hóa";
        break;
      }
      case 'B': {
        this.KhoiA = true;
        this.Mon1 = "Toán";
        this.Mon2 = "Hóa";
        this.Mon3 = "Sinh";
        break;
      }
      case 'C': {
        this.KhoiA = true;
        this.Mon1 = "Văn";
        this.Mon2 = "Sử";
        this.Mon3 = "Địa";
        break;
      }
      case 'D': {
        this.KhoiA = true;
        this.Mon1 = "Toán";
        this.Mon2 = "Văn";
        this.Mon3 = "Anh";

        break;
      }
    }
  }
  getRulesXetTuyen() {
    this.http.get('http://localhost:52360/api/luatxettuyen/findrules?idLoailuat=' + this.sttLuat + '&&keyword=' + this.Khoa)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    this.listHidden = true;
  }
  getDsKhoa() {
    this.http.get('http://localhost:52360/api/data/getallkhoa')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsKhoa = resJson)
      .catch(err => console.log(err));
  }
}
