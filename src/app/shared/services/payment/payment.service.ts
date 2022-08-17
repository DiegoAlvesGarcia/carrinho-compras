import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCardInterface } from '../../interfaces/dataCard.interface';
import { PaymentsInterface } from '../../interfaces/payments.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getInstallments(): Observable<PaymentsInterface[]> {
    return this.httpClient.get<PaymentsInterface[]>('http://localhost:3000/installments');
  }

  setDataCard(body: DataCardInterface): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/infoCards', body)
  }
}
