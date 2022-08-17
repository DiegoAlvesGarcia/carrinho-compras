import { CurrencyPipe } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { throwError } from 'rxjs';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { currencyPipeStub } from 'src/app/shared/stubs/currencyPipe.stub';
import { formBuilderStub } from 'src/app/shared/stubs/formBuilder.stub';
import { paymentServiceStub } from 'src/app/shared/stubs/paymentService.stub';

import { PagamentoCartaoComponent } from './pagamento-cartao.component';

describe('PagamentoCartaoComponent', () => {
  let component: PagamentoCartaoComponent;
  let fixture: ComponentFixture<PagamentoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagamentoCartaoComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: CurrencyPipe, useValue: currencyPipeStub },
        { provide: PaymentService, useValue: paymentServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to test continue() with sucess in subscribe', () => {
    component.continue();
    expect(window.alert).toBeCalledWith('Pagamento realizado com sucesso')
  })

  it('should to test continue() with error in subscribe', () => {
    paymentServiceStub.setDataCard.mockReturnValue(throwError(''));
    component.continue();
    expect(window.alert).toBeCalledWith('Erro: pagamento não realizado. Confira informações do cartão')
  })
});
