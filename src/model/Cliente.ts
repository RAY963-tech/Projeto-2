import { Produto } from "./Produto";

export class Cliente {
    carrinho: { produto: Produto, quantidade: number }[] = [];

    constructor(public nome: string) {}

    adicionarAoCarrinho(produto: Produto, quantidade: number) {
        this.carrinho.push({ produto, quantidade });
    }

    finalizarCompra() {
        console.log(`Cliente ${this.nome} finalizou a compra!`);
        this.carrinho.forEach(item => {
            console.log(`Produto: ${item.produto.nome}, Quantidade: ${item.quantidade}`);
        });
    }
}
