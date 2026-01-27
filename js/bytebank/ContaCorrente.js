export class ContaCorrente {
        agencia;
        static numeroDeContas = 0;
        
        _cliente;
        _saldo   = 0;

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }
    get cliente(){
        return this._cliente;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

        sacar(valor) {
            if (this._saldo >= valor) {
                    this._saldo -= valor;
                    return valor;
            }
        }

        depositar(valor) {
            if (valor <= 0) return;
            this._saldo += valor;
        }

        transferir(valor, conta) {
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }

    }