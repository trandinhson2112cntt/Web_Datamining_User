import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-phongdaotao',
  templateUrl: './phongdaotao.component.html',
  styleUrls: ['./phongdaotao.component.scss']
})
export class PhongdaotaoComponent {
  sttLuat = '1';
  xemLuatStt = '1';
  sup;
  con;
  data: Array<String> = [];
  constructor(private http: Http) {
  }
  luachonluat() {
    switch (this.sttLuat) {
      case '1': {
        this.CreateRulesDaoTaoUngTuyen();
        break;
      }
      case '2': {
        this.CreateRulesDaoTaoNhapHoc();
        break;
      }
      default: {
        break;
      }
    }
  }

  xemluat() {
    switch (this.xemLuatStt) {
      case '1': {
        this.GetAllRulesLuatDaoTao();
        break;
      }
      case '2': {
        this.GetAllRulesLuatDaoTao();
        break;
      }
      case '3': {
        this.GetAllRulesLuatDaoTao();
        break;
      }

      default: {
        break;
      }
    }
  }
  // ----------Luat Hoc Tap-----------------
  CreateRulesHocTapKhoaHocVuot() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luathoctap/create?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  CreateRulesHocTapKhoaHocCaiThien() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luathoctap/createcaithien?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  CreateRulesHocTapMonHocVuotDiemTang() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luathoctap/CreateDiemTangHocVuot?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  CreateRulesHocTapMonCaiThienDiemTang() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luathoctap/CreateDiemTangCaiThien?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  GetAllRulesLuatHocTap() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luathoctap/getall?idLoailuat=' + this.xemLuatStt)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.xemLuatStt);
  }
  // ----------Luat Tuyen Sinh-----------------
  CreateRulesTuyenSinhHocBa() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatxettuyen/createxthb?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  CreateRulesTuyenSinhThiTuyen() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatxettuyen/createthituyen?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  GetAllRulesLuatTuyenSinh() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatxettuyen/getall?idLoailuat=' + this.xemLuatStt)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.xemLuatStt);
  }
  // -----------Luat Dao Tao----------------
  CreateRulesDaoTaoUngTuyen() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatphongdaotao/createhinhthuckhuvuc?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  CreateRulesDaoTaoNhapHoc() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatphongdaotao/createkhuvucnhaphoc?idLoailuat=' + this.sttLuat + '&&sup=' + this.sup + '&&con=' + this.con + '')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.sttLuat, this.sup, this.con);
  }
  GetAllRulesLuatDaoTao() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:52360/api/luatphongdaotao/getall?idLoailuat=' + this.xemLuatStt)
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.data = resJson)
      .catch(err => console.log(err));
    console.log(this.xemLuatStt);
  }
}
