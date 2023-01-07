// This import a object of other JS file
import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

const client1 = new Client();

client1.name = "client1";
client1.cpf = "423532453";

const account1 = new CheckingAccount();

account1.agency = 1;
account1.client = client1;
account1.deposit(1000);

const account2 = new CheckingAccount();
account1.transfer(300, account2);

console.log(account1);
console.log(account2);