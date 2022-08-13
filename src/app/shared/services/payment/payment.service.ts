import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getInstallments() {
    return this.httpClient.get('http://localhost:3000/installments/');
  }
}
