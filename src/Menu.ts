import readline from "readline-sync";
import { ProdutoController } from "./controller/ProdutoController";


export function main() {


    let opcao: number;
    const  produtos = new ProdutoController();


    while (true) {
        console.log("================================================");
        console.log("           SISTEMA DE PRODUTOS                  ");
        console.log("================================================");
        console.log("1 - Listar todos os produtos");
        console.log("2 - Cadastrar Produto");
        console.log("3 - Buscar produto por ID");
        console.log("4 - Atualizar produto");
        console.log("5 - Deletar produto");
        console.log("0 - Sair");
        console.log("================================================");

        opcao = Number(readline.question("Digite uma opcao: "));

        switch (opcao) {
            case 1:
                produtos.listarTodos();
                break;
            case 2:
                produtos.cadastrarProduto();
                break;
            case 3:
                produtos.buscarPorId();
                break;
            case 4:
                produtos.atualizarProduto();
                break;
            case 5:
                produtos.deletarProduto();
                break;
            case 0:
               console.log("Sistema finalizado.");
               ProcessingInstruction.exit(0);
            default:
                console.log("Opcao invalida!"); 
        }

        console.log("\nPressione ENTER para continuar...");
        readline.question();
    

    }
}

main();