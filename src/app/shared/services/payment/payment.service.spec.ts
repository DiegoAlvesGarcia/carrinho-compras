import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { httpClientStub } from '../../stubs/http-cliente.stub';
import { paymentsMock } from '../../mocks/payments.mock'
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientStub },
      ]
    });
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be test getInstallments()', () => {
    httpClientStub.get.mockReturnValue(of(paymentsMock));
    service.getInstallments().subscribe((resp) => {
      expect(resp).toEqual(paymentsMock);
    })
  })

  it('should be test setDataCard()', () => {
    let body = {
      cvv: '123',
      date: '1298',
      installments: 'wudged6161',
      name: 'Teste',
      numCard: '1234567812345678'
    }

    service.setDataCard(body).subscribe();
    expect(httpClientStub.post).toHaveBeenCalledWith('http://localhost:3000/infoCards', body);
  })
});
