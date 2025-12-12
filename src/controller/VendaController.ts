import { Venda } from "../model/Venda";

export class VendaController {
    private vendas: Venda[] = [];

    registrarVenda(venda: Venda): void {
        this.vendas.push(venda);
        console.log("Venda registrada com sucesso!");
    }

    listarVendas(): void {
        this.vendas.forEach(venda => {
            console.log(`Cliente: ${venda.cliente.nome}, Produto: ${venda.produto.nome}, Quantidade: ${venda.quantidade}`);
        });
    }
}
