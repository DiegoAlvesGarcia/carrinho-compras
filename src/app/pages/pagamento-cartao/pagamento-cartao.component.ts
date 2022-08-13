import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagamento-cartao',
  templateUrl: './pagamento-cartao.component.html',
  styleUrls: ['./pagamento-cartao.component.scss']
})
export class PagamentoCartaoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm() {
    this.form = this.fb.group({
      numCard: [null, [Validators.required, Validators.minLength(16)]],
      name: [null, [Validators.required]],
      date: [null, [Validators.required, Validators.minLength(4)]],
      cvv: [null, [Validators.required, Validators.minLength(3)]],
      installments: [null, [Validators.required]],
    });
  }

}
