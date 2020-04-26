class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }

    getData() {
        return this.data;
    }

    getQuantidade() {
        return this.quantidade;
    }

    getValor() {
        return this.valor;
    }

    setData(data) {
        data = data;
    }

    setQuantidade(quantidade) {
        quantidade = quantidade;
    }

    setValor(valor) {
        valor = valor;
    }
}