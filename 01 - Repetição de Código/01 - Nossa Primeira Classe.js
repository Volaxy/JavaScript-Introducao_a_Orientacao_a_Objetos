class Client {
    name;
    cpf;
    agency;
    balance;
}

const client1 = new Client();
const client2 = new Client();

client1.name = "client1";
client1.cpf = "423532453";
client1.agency = 101;
client1.balance = 0;

client2.name = "client1";
client2.cpf = "423532453";
client2.agency = 101;
client2.balance = 0;

console.log(client1);
console.log(client2);