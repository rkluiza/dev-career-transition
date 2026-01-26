import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const andre = new Cliente();

andre.nome = "André Silva";
andre.cpf = 12345678900;

const maria = new Cliente();

maria.Nome = "Maria Oliveira";
maria.CPF = 98765432100;

const contaCorrenteAndre = new ContaCorrente();
contaCorrenteAndre.agencia = 1001;
contaCorrenteAndre.numero = 123456;


console.log(andre);
console.log(contaCorrenteAndre);