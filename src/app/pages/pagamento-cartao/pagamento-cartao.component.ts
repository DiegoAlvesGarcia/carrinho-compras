import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pagamento-cartao',
  templateUrl: './pagamento-cartao.component.html',
  styleUrls: ['./pagamento-cartao.component.scss']
})
export class PagamentoCartaoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  installments = [];

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.setInstallments()
  }

  private setForm() {
    this.form = this.fb.group({
      numCard: [null, [Validators.required, Validators.minLength(16)]],
      name: [null, [Validators.required]],
      date: [null, [Validators.required, Validators.minLength(4), Validators.max(1299)]],
      cvv: [null, [Validators.required, Validators.minLength(3)]],
      installments: [null, [Validators.required]],
    });
  }

  private setInstallments() {
    this.paymentService.getInstallments()
      .pipe(take(1))
      .subscribe((resp) => {
        resp.forEach((value: any) => {
          this.installments.push(
            `${value.portion} de ${this.currencyPipe.transform(value.value, 'BRL')}
            ${value.interest ? `com ${value.interest} de juros` : 'sem juros'}`
          )
        })
      })
  }

  continue() {
    console.log(this.form);
  }
}
