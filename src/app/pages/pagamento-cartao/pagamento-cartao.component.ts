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

  valueCard = {
    flag: '',
    numCard: '',
    name: '',
    date: '',
  }

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
      .subscribe((resp: []) => {
        console.log(resp);
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

  dataCard(controlName: string) {
    switch (controlName) {
      case 'numCard':
        this.valueCard.numCard = this.form.controls['numCard'].value?.match(/\d{1,4}/g)?.join(' ');
        this.setFlagCard(this.form.controls['numCard'].value.substring(0, 1));
        break;
      case 'name':
        this.form.controls['name'].setValue(this.form.controls['name'].value?.toUpperCase());
        this.valueCard.name = this.form.controls['name'].value;
        break;
      case 'date':
        this.valueCard.date = this.form.controls['date'].value?.match(/\d{1,2}/g)?.join('/');
        break;
      default:
        break;
    }
  }

  setFlagCard(firstNumberCard: string) {
    switch (firstNumberCard) {
      case '4':
        this.valueCard.flag = 'visa';
        break;
      case '5':
        this.valueCard.flag = 'mastercard';
        break;
      default:
        this.valueCard.flag = 'credit card'
        break;
    }
  }

}
