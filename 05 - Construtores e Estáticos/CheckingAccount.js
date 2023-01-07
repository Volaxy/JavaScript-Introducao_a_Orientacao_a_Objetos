import { Client } from "./Client.js";

export class CheckingAccount {
    static numberAccounts = 0;

    // CLIENT
    _client;

    get client() {
        return this._client;
    }

    set client(client) {
        if(client instanceof Client)
            this._client = client;
    }

    // AGENCY
    agency;

    // BALANCE
    _balance = 0;

    get balance() {
        return this._balance;
    }

    constructor(client, agency) {
        this.agency = agency;
        this.client = client;

        CheckingAccount.numberAccounts++;
    }

    // METHODS
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