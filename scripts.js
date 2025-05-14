import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente();

cliente1.nome = "Estêvão";
cliente1.cpf = 60083880092;

const contaCliente1 = new ContaCorrente()

contaCliente1.saldo = 100;
contaCliente1.agencia = 1001;
contaCliente1.cliente = cliente1;

console.log(contaCliente1)
