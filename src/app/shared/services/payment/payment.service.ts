import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payments } from '../../interfaces/payments.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getInstallments(): Observable<Payments[]> {
    return this.httpClient.get<Payments[]>('http://localhost:3000/installments/');
  }
}
