import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCompareComponent } from './billing-compare.component';

describe('BillingCompareComponent', () => {
  let component: BillingCompareComponent;
  let fixture: ComponentFixture<BillingCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
