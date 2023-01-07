// This import a object of other JS file
import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

const client1 = new Client("José", "534534534");

const account1 = new CheckingAccount(client1, 1);

account1.deposit(1000);

console.log(account1);