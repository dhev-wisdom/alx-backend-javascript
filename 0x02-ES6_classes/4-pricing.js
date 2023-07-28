import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {

    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Currency must be of type Currency (class)');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Currency must be of type Currency (class)');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code}}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
