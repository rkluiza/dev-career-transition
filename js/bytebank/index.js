import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 12345678900, 5000);
const gerente = new Gerente("Ricardo", 98765432100, 4000);

diretor.cadastrarSenha("1234");
const estaLogado = SistemaAutenticacao.login(diretor, "1234");

console.log(estaLogado);

const cliente1 = new Cliente("Alice", 11122233344, "4321");

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "4421");
console.log(clienteEstaLogado);

