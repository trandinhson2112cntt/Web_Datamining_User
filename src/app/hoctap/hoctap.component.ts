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
  dsKhoa: Array<String> = [];
  dsMonHoc: Array<String> = [];
  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();
    this.getDsMonHoc();
  }

  ngOnInit() {
  }

  getRulesHocTap() {
    this.http.get('http://localhost:52360/api/luathoctap/getall?idLoailuat=1')
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

  getDsMonHoc() {
    this.http.get('http://localhost:52360/api/data/getallmonhoc')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsMonHoc = resJson)
      .catch(err => console.log(err));
  }
}
