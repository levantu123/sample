import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGoalComponent } from './all-goal.component';

describe('AllGoalComponent', () => {
  let component: AllGoalComponent;
  let fixture: ComponentFixture<AllGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
