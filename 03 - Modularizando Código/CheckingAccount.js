export class CheckingAccount {
    client;
    
    agency;
    _balance = 0;

    withdraw(value) {
        if(this._balance >= value) {
            this._balance -= value;
        }
    }

    deposit(value) {
        this._balance += value;
    }

    transfer(value, account) {
        this.withdraw(value);

        account._balance += value;
    }
}