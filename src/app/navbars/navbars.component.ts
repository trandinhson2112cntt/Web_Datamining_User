import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  isHidden = true;
  constructor() { }

  ngOnInit() {
  }

  clickLink() {
    this.isHidden = !this.isHidden;
  }
  changePage() {
    this.isHidden = false;
  }
  changeToAdmin(){
    this.isHidden = false;
  }
}
