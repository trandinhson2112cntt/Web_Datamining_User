import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
@Component({
  selector: 'app-hoctap',
  templateUrl: './hoctap.component.html',
  styleUrls: ['./hoctap.component.scss']
})
export class HoctapComponent implements OnInit {

  data: Array<String> = [];
  listHidden = false;
  alertHidden = false;
  dsKhoa: Array<String> = [];
  dsMonHoc: Array<String> = [];
  model = { 'hinhThucHoc': '1' };
  luaChonLuat = '1';
  hienThiMonhoc = false;
  selectKhoa = '';
  selectMonHoc = '';
  selectLoaiLuat = '';
  maxPercent = 0;
  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();
    this.getDsMonHoc();
  }
  ngOnInit() {
  }
  hienThiTheoLuat(value) {
    switch (value) {
      case '1': {
        this.hienThiMonhoc = false;
        this.luaChonLuat = '1';
        break;
      }
      case '2': {
        this.hienThiMonhoc = true;
        this.luaChonLuat = '2';
        break;
      }
    }
  }
  getRules() {
    switch (this.model.hinhThucHoc) {
      case '1': {
        if (this.luaChonLuat === '1') {
          this.selectLoaiLuat = '1';
          this.getRulesHocTap();
          break;
        } else {
          this.selectLoaiLuat = '3';
          this.selectKhoa = this.selectMonHoc;
          this.getRulesHocTap();
          break;
        }
      }

      case '2': {
        if (this.luaChonLuat === '1') {
          this.selectLoaiLuat = '2';
          this.getRulesHocTap();
          break;
        } else {
          this.selectLoaiLuat = '4';
          this.selectKhoa = this.selectMonHoc;
          this.getRulesHocTap();
          break;
        }
      }
    }
  }
  checkListExist() {
    if (this.data.length > 0) {
      this.listHidden = true;
      this.alertHidden = false;
    } else {
      this.listHidden = false;
      this.alertHidden = true;
    }
  }
  getRulesHocTap() {
    this.http.get('http://webdatamining.somee.com/api/luathoctap/findrules?idLoailuat=' + this.selectLoaiLuat + '&&keyword=' + this.selectKhoa)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    this.maxPercent =  this.getMaxData(this.data);
  }
  getRulesDiemTang(value) {
    if (this.model.hinhThucHoc === '1') {
      this.http.get('http://webdatamining.somee.com/api/luathoctap/findrules?idLoailuat=3' + '&&keyword=' + value)
        .toPromise()
        .then(res => res.json())
        .then(resJson => this.data = resJson)
        .catch(err => console.log(err));
    } else {
      this.http.get('http://webdatamining.somee.com/api/luathoctap/findrules?idLoailuat=4' + '&&keyword=' + value)
        .toPromise()
        .then(res => res.json())
        .then(resJson => this.data = resJson)
        .catch(err => console.log(err));
    }
    this.maxPercent =  this.getMaxData(this.data);
  }
  getDsKhoa() {
    this.http.get('http://webdatamining.somee.com/api/data/getallkhoa')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsKhoa = resJson)
      .catch(err => console.log(err));
  }

  getDsMonHoc() {
    this.http.get('http://webdatamining.somee.com/api/data/getallmonhoc')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsMonHoc = resJson)
      .catch(err => console.log(err));
  }
  getMaxData(data) {
    return Math.max.apply(Math, data.map(function(o) { return o.Confidence; }));
  }
  get debug() {
    // tslint:disable-next-line:max-line-length
    return JSON.stringify(this.model) + this.model.hinhThucHoc + this.selectMonHoc + '\t' + this.selectLoaiLuat + this.selectKhoa;
  }
}
