import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyensinhComponent } from './tuyensinh.component';

describe('TuyensinhComponent', () => {
  let component: TuyensinhComponent;
  let fixture: ComponentFixture<TuyensinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuyensinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuyensinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
