import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTXettuyenComponent } from './HTXettuyen.component';

describe('HTXettuyenComponent', () => {
  let component: HTXettuyenComponent;
  let fixture: ComponentFixture<HTXettuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTXettuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTXettuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
