import { Produto } from "../model/Produto";

export class ProdutoRepository {
    private produtos: Produto[] = [];

    listar() {
        return this.produtos;
    }

    adicionar(produto: Produto) {
        this.produtos.push(produto);
    }

    deletar(id: number) {
        const index = this.produtos.findIndex(p => p.id === id);
        if(index !== -1) {
            this.produtos.splice(index, 1);
        }
    }
}
