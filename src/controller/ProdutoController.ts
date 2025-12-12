import { Produto } from "../model/Produto";

export class ProdutoController {
    filtrarPorMarca(marca: any) {
        throw new Error('Method not implemented.');
    }
    filtrarPorNome(nome: any) {
        throw new Error('Method not implemented.');
    }
    listaProdutos: Produto[] = [];
    private id: number = 0;

    gerarId(): number {
        return ++this.id;
    }

    cadastrar(produto: Produto): void {
        produto.id = this.gerarId();
        this.listaProdutos.push(produto);
    }

    listarTodos(): void {
        this.listaProdutos.forEach(prod => prod.visualizar());
    }

    procurarPorId(id: number): Produto | undefined {
        return this.listaProdutos.find(prod => prod.id === id);
    }

    deletar(id: number): void {
        const index = this.listaProdutos.findIndex(prod => prod.id === id);
        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
        }
    }
}
