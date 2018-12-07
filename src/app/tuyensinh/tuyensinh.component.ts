import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
import { forEach } from '@angular/router/src/utils/collection';


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
  alertHidden = false;
  maxPercent='';
  dsKhoa: Array<String> = [];
  sttLuat='5';
  d1=''; d2=''; d3=''; dt='';
  Khoi='';
  Khoa='';
  FormDiem=false;
  Mon1='';
  Mon2='';
  Mon3='';
  cmnd='';

  constructor(private http: Http) {
    this.listHidden = false;
    this.getDsKhoa();
  }

  ngOnInit() {
  }
  ChonKhoi() {
    switch (this.Khoi) {
      case 'A': {
        this.FormDiem = true;
        this.Mon1="Toán";
        this.Mon2="Lý";
        this.Mon3="Hóa";
        break;
      }
      case 'B': {
        this.FormDiem = true;
        this.Mon1="Toán";
        this.Mon2="Hóa";
        this.Mon3="Sinh";
        break;
      }
      case 'C': {
        this.FormDiem = true;
        this.Mon1="Văn";
        this.Mon2="Sử";
        this.Mon3="Địa";
        break;
      }
      case 'D': {
        this.FormDiem = true;
        this.Mon1="Toán";
        this.Mon2="Văn";
        this.Mon3="Anh";
      }
     
    }
  }
  getRulesXetTuyen() {

    if(this.cmnd==''||this.Khoa=='')
    {
      this.listHidden=false;
    }
    else{
      if(this.Khoi=='')
      {
        this.http.get('http://localhost:52360/api/luatxettuyen/findrules1?idLoailuat='+this.sttLuat+'&&keyword='+this.Khoa)
        .toPromise()
          .then(res => res.json())
          .then(resJson => this.data = resJson)
          .catch(err => console.log(err));
          this.maxPercent =  this.getMaxData(this.data);
         // this.listHidden=true;
          
        this.checkListExist();
      }
      else
      {
        this.dt=+this.d1+this.d2+this.d3; 
        Math.ceil(+this.dt);
        
        this.http.get('http://localhost:52360/api/luatxettuyen/findrules?idLoailuat='+this.sttLuat+'&&keyword='+this.Khoa+'&&dt='+this.dt)
          .toPromise()
          .then(res => res.json())
          .then(resJson => this.data = resJson)
          .catch(err => console.log(err));
          this.maxPercent =  this.getMaxData(this.data);
         // this.listHidden=true;
        
        this.checkListExist();
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
insertKS()
{
  if(this.cmnd!=''&&this.Khoi!=''&&this.d1!=''&&this.d2!=''&&this.d3!='')
  {
    this.http.get('http://localhost:52360/api/khaosat/create?cmnd='+this.cmnd+'&&khoi='+this.Khoi+'&&d1='+this.d1+'&&d2='+this.d2+'&&d3='+this.d3)
  .toPromise()
  .then(res => res.json());
  console.log("Them Thanh Cong") ; 
  }
  
}
  getDsKhoa() {
    this.http.get('http://localhost:52360/api/data/getallkhoa')
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.dsKhoa = resJson)
      .catch(err => console.log(err));
  }
  getMaxData(data) {
    return Math.max.apply(Math, data.map(function(o) { return o.Confidence; }));
  }
}
