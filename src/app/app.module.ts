import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { Routes, RouterModule } from '@angular/router';
import { TuyensinhComponent } from './tuyensinh/tuyensinh.component';
import { HoctapComponent } from './hoctap/hoctap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PhongdaotaoComponent } from './phongdaotao/phongdaotao.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
  { path: 'tu-van-tuyen-sinh', component: TuyensinhComponent },
  { path: 'tu-van-hoc-tap', component: HoctapComponent },
  { path: 'trang-phong-dao-tao', component: PhongdaotaoComponent },
  { path: 'trang-admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    TuyensinhComponent,
    HoctapComponent,
    PhongdaotaoComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      'backgroundColor': '#F1F1F1',
      'backgroundOpacity': 0,
      'backgroundStrokeWidth': 5,
      'backgroundPadding': 24,
      'radius': 86,
      'space': 2,
      'toFixed': 0,
      'outerStrokeWidth': 11,
      'outerStrokeColor': '#FF6347',
      'innerStrokeColor': '#32CD32',
      'innerStrokeWidth': 3,
      'titleFontSize': '17',
      'subtitleColor': '#ffffff',
      'imageHeight': 133,
      'showSubtitle': false,
      'responsive': true,
      'startFromZero': false
    }),
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routesConfig),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
