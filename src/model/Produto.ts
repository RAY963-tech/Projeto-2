export class Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public quantidade: number
    ) {}

    visualizar() {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`);
    }

    registrarSaida(qtd: number) {
        if(qtd > this.quantidade) {
            console.log("Quantidade insuficiente no estoque!");
        } else {
            this.quantidade -= qtd;
            console.log(`${qtd} unidade(s) vendida(s). Estoque atual: ${this.quantidade}`);
        }
    }
}
