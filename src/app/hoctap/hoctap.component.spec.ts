import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoctapComponent } from './hoctap.component';

describe('HoctapComponent', () => {
  let component: HoctapComponent;
  let fixture: ComponentFixture<HoctapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoctapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoctapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
