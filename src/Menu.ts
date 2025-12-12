import { ProdutoController } from "./controller/ProdutoController";
import { Eletronico } from "./model/Eletronico";
import { Entrada } from "./util/Entrada";
import { Cores } from "./util/Cores";
import { Banner } from "./view/Banner";

const produtos = new ProdutoController();

console.log(Cores.Bright + Banner + Cores.Reset);

while(true){
    console.log(Cores.Yellow + "\n========= MENU =========" + Cores.Reset);
    console.log(Cores.Green + "1 - Listar todos os produtos" + Cores.Reset);
    console.log(Cores.Green + "2 - Cadastrar produto" + Cores.Reset);
    console.log(Cores.Green + "3 - Buscar produto por ID" + Cores.Reset);
    console.log(Cores.Green + "4 - Atualizar produto" + Cores.Reset);
    console.log(Cores.Green + "5 - Deletar produto" + Cores.Reset);
    console.log(Cores.Red + "0 - Sair" + Cores.Reset);
    console.log(Cores.Yellow + "========================" + Cores.Reset);

    const opcao = Entrada.perguntaInt("Escolha uma opção: ");

    switch(opcao){
        case 1:
            produtos.listarTodos();
            break;

        case 2:
            const nome = Entrada.perguntaString("Nome do produto: ");
            const preco = Entrada.perguntaFloat("Preço: ");
            const quantidade = Entrada.perguntaInt("Quantidade: ");
            const marca = Entrada.perguntaString("Marca: ");
            const garantia = Entrada.perguntaInt("Garantia (meses): ");
            const eletronico = new Eletronico(0, nome, preco, quantidade, marca, garantia);
            produtos.cadastrar(eletronico);
            break;

        case 3:
            const buscarId = Entrada.perguntaInt("Digite o ID do produto: ");
            const encontrado = produtos.procurarPorId(buscarId);
            if(encontrado){
                console.log(Cores.Bright + "Produto encontrado:" + Cores.Reset);
                encontrado.visualizar();
            } else {
                console.log(Cores.Red + "Produto não encontrado!" + Cores.Reset);
            }
            break;

        case 4:
            const atualizarId = Entrada.perguntaInt("ID do produto a atualizar: ");
            const prodAtualizar = produtos.procurarPorId(atualizarId);
            if(prodAtualizar){
                const novoNome = Entrada.perguntaString("Novo nome: ");
                const novoPreco = Entrada.perguntaFloat("Novo preço: ");
                const novaQuantidade = Entrada.perguntaInt("Nova quantidade: ");
                const novaMarca = Entrada.perguntaString("Nova marca: ");
                const novaGarantia = Entrada.perguntaInt("Nova garantia: ");
                const atualizado = new Eletronico(atualizarId, novoNome, novoPreco, 
                novaQuantidade,novaMarca, novaGarantia);
                produtos.atualizar(atualizado);
            } else {
                console.log(Cores.Red + "Produto não encontrado!" + Cores.Reset);
            }
            break;

        case 5:
            const deletarId = Entrada.perguntaInt("ID do produto a deletar: ");
            produtos.deletar(deletarId);
            break;

        case 0:
            console.log(Cores.Bright + "Sistema finalizado." + Cores.Reset);
            process.exit(0);

        default:
            console.log(Cores.Red + "Opção inválida!" + Cores.Reset);
    }

    console.log("\nPressione ENTER para continuar...");
    Entrada.perguntaString("");
}

