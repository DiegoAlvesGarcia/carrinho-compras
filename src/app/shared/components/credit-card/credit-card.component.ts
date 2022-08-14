import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnChanges {
  @Input() numCard!: string;
  @Input() flag!: string;
  @Input() name!: string;
  @Input() date!: string;

  constructor() { }

  ngOnChanges() {
    this.numCard = this.numCard?.match(/\d{1,4}/g)?.join(' ');
    this.name = this.name?.toUpperCase();
    this.date = this.date?.match(/\d{1,2}/g)?.join('/');
    this.setFlagCard(this.numCard?.substring(0, 1));
  }

  setFlagCard(firstNumberCard: string) {
    switch (firstNumberCard) {
      case '4':
        this.flag = 'visa';
        break;
      case '5':
        this.flag = 'mastercard';
        break;
      default:
        this.flag = 'credit card'
        break;
    }
  }
}
