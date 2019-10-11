import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoalWalletComponent } from './add-goal-wallet.component';

describe('AddGoalWalletComponent', () => {
  let component: AddGoalWalletComponent;
  let fixture: ComponentFixture<AddGoalWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoalWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
