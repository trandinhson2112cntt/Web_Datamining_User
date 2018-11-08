import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongdaotaoComponent } from './phongdaotao.component';

describe('PhongdaotaoComponent', () => {
  let component: PhongdaotaoComponent;
  let fixture: ComponentFixture<PhongdaotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhongdaotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongdaotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
