import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card.component';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shold test ngOnChanges without values', () => {
    component.ngOnChanges();
    expect(component.date).toBeUndefined();
    expect(component.name).toBeUndefined();
    expect(component.numCard).toBeUndefined();
  })

  it('shold test ngOnChanges with values', () => {
    component.date = '1122';
    component.name = 'Teste';
    component.numCard = '1234567812345678';
    component.ngOnChanges();
    expect(component.date).toEqual('11/22');
    expect(component.name).toEqual('TESTE');
    expect(component.numCard).toEqual('1234 5678 1234 5678');
  })
  
  it('shold test setFlagCard to be Mastercard', () => {
    component.numCard = '5555555555555555';
    component.ngOnChanges();
    expect(component.flag).toEqual('mastercard');
  })

  it('shold test setFlagCard to be Visa', () => {
    component.numCard = '4444444444444444';
    component.ngOnChanges();
    expect(component.flag).toEqual('visa');
  })
});
