class Cliente {
    nome 
    cpf = 0
}

class ContaCliente {
    agencia
    
    #saldo = 0
    depositar(valor) {
        if (valor > 0)
        this.#saldo += valor
    } 

}


//Cliente 1
const cliente1 = new Cliente()
cliente1.nome = 'Antony'
cliente1.cpf = 08808068935

//Conta Cliente 1
const contaAntony = new ContaCliente()

console.log(contaAntony)

