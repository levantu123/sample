import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasicWalletComponent } from './add-basic-wallet.component';

describe('AddBasicWalletComponent', () => {
  let component: AddBasicWalletComponent;
  let fixture: ComponentFixture<AddBasicWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBasicWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasicWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
