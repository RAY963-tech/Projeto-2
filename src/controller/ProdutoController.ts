import { Produto } from "../model/Produto";
import { Eletronico } from "../model/Eletronico";

export class ProdutoController {
    private listaProdutos: Produto[] = [];
    private id: number = 0;

    gerarId(): number {
        return ++this.id;
    }

    listarTodos(): void {
        if(this.listaProdutos.length === 0){
            console.log("Nenhum produto cadastrado.");
        } else {
            this.listaProdutos.forEach(prod => prod.visualizar());
        }
    }

    cadastrar(produto: Eletronico): void {
        produto. id = this.gerarId();
        this.listaProdutos.push(produto);
        console.log("Produto cadastrado com sucesso!");
    }

    procurarPorId(id: number): Produto | undefined {
        return this.listaProdutos.find(p => p.id === id);
    }

    atualizar(produto: Eletronico): void {
        const index = this.listaProdutos.findIndex(p => p.id === produto.id);
        if(index !== -1){
            this.listaProdutos[index] = produto;
            console.log("Produto atualizado com sucesso!");
        } else {
            console.log("Produto não encontrado!");
        }
    }

    deletar(id: number): void {
        const index = this.listaProdutos.findIndex(p => p.id === id);
        if(index !== -1){
            this.listaProdutos.splice(index, 1);
            console.log("Produto removido com sucesso!");
        } else {
            console.log("Produto não encontrado!");
        }
    }
}
