import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

//Cliente 1
const cliente1 = new Cliente('Ricardo', 11122233309)

//Cliente 2
const cliente2 = new Cliente('Alice', 88822233309)


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(200)
contaCorrenteRicardo.depositar(50)

const conta2 = new ContaCorrente(1002, cliente2)

contaCorrenteRicardo.transferir(200, conta2)


console.log(ContaCorrente.numeroDeContas)