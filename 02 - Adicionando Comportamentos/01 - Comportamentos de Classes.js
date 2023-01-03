class Client {
    name;
    cpf;
}

class CheckingAccount {
    agency;
    _balance = 0; // The "_" indicates that the class attribute is private, and should be discouraged from being tampered with in program code.
    // This syntax is a convention, but it is not applied in the actual language.

    withdraw(value) {
        if(this._balance >= value) {
            this._balance -= value;
        }
    }

    deposit(value) {
        this._balance += value;
    }
}

const client1 = new Client();

client1.name = "client1";
client1.cpf = "423532453";

const account1 = new CheckingAccount();

account1.agency = 1;

console.log(client1);
console.log(account1);