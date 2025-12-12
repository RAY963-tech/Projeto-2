export class Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public quantidade: number
    ) {}

    visualizar(): void {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`);
    }
}
