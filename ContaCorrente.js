import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    agencia
    
    static numeroDeContas = 0
    _cliente 
    _saldo = 0



    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }
    get cliente() {
        return this._cliente
    }
    get saldo() {
        return this._saldo
    }

    constructor(agency, client) {
        this.agencia = agency
        this.cliente = client
        ContaCorrente.numeroDeContas += 1
    }




    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }
    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor
        }
    }
    transferir(valor, conta) {
/*         this.sacar(valor)
 */        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}