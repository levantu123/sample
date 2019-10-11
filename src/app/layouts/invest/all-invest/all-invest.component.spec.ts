import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInvestComponent } from './all-invest.component';

describe('AllInvestComponent', () => {
  let component: AllInvestComponent;
  let fixture: ComponentFixture<AllInvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
