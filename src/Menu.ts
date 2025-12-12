import { Entrada } from './util/Entrada';
import { Cores } from './util/Cores';
import { ProdutoController } from './controller/ProdutoController';
import { VendaController } from './controller/VendaController';
import { Eletronico } from './model/Eletronico';
import { Notebook } from './Notebook';
import { Cliente } from './model/Cliente';
import { Venda } from './model/Venda';
import { Banner } from './view/Banner';

const produtos = new ProdutoController();
const vendas = new VendaController();
let clientes: Cliente[] = [];

console.log(Cores.Yellow + Banner + Cores.Reset);

// ================= Funções do Menu =================

function cadastrarProduto() {
    const nome = Entrada.perguntaString("Nome do produto: ");
    const preco = Entrada.perguntaFloat("Preço: ");
    const quantidade = Entrada.perguntaInt("Quantidade: ");
    const marca = Entrada.perguntaString("Marca: ");
    const garantia = Entrada.perguntaInt("Garantia (meses): ");

    const produto = new Eletronico(0, nome, preco, quantidade, marca, garantia);
    produtos.cadastrar(produto);
}

function buscarProduto() {
    const id = Entrada.perguntaInt("Digite o ID do produto: ");
    const encontrado = produtos.procurarPorId(id);
    if (encontrado) {
        encontrado.visualizar();
    } else {
        console.log("Produto não encontrado.");
    }
}

function atualizarProduto() {
    const id = Entrada.perguntaInt("ID do produto para atualizar: ");
    const prod = produtos.procurarPorId(id);
    if (prod) {
        prod.nome = Entrada.perguntaString("Novo nome: ");
        prod.preco = Entrada.perguntaFloat("Novo preço: ");
        prod.quantidade = Entrada.perguntaInt("Nova quantidade: ");
        console.log("Produto atualizado!");
    } else {
        console.log("Produto não encontrado.");
    }
}

function deletarProduto() {
    const id = Entrada.perguntaInt("ID do produto para deletar: ");
    produtos.deletar(id);
}

function filtrarPorNome() {
    const nome = Entrada.perguntaString("Nome para filtrar: ");
    produtos.filtrarPorNome(nome);
}

function filtrarPorMarca() {
    const marca = Entrada.perguntaString("Marca para filtrar: ");
    produtos.filtrarPorMarca(marca);
}

function registrarVenda() {
    const nomeCliente = Entrada.perguntaString("Nome do cliente: ");
    const cliente = new Cliente(nomeCliente);
    clientes.push(cliente);

    const idProduto = Entrada.perguntaInt("ID do produto: ");
    const produto = produtos.procurarPorId(idProduto);
    if (!produto) {
        console.log("Produto não encontrado.");
        return;
    }

    const quantidade = Entrada.perguntaInt("Quantidade: ");
    cliente.adicionarAoCarrinho(produto, quantidade);

    const venda = new Venda(0, cliente, produto, quantidade);
    vendas.registrarVenda(venda);
    cliente.finalizarCompra();
}

function listarVendas() {
    vendas.listarVendas();
}

// ================= Menu Principal =================

function main() {
    let opcao: number;

    do {
        console.log(Cores.Green + "\nMENU PRINCIPAL" + Cores.Reset);
        console.log("1 - Listar todos os produtos");
        console.log("2 - Cadastrar Produto");
        console.log("3 - Buscar produto por ID");
        console.log("4 - Atualizar produto");
        console.log("5 - Deletar produto");
        console.log("6 - Filtrar por nome");
        console.log("7 - Filtrar por marca");
        console.log("8 - Registrar Venda");
        console.log("9 - Listar Vendas");
        console.log("0 - Sair");

        opcao = Entrada.perguntaInt("Escolha uma opção: ");

        switch(opcao) {
            case 1:
                produtos.listarTodos();
                break;
            case 2:
                cadastrarProduto();
                break;
            case 3:
                buscarProduto();
                break;
            case 4:
                atualizarProduto();
                break;
            case 5:
                deletarProduto();
                break;
            case 6:
                filtrarPorNome();
                break;
            case 7:
                filtrarPorMarca();
                break;
            case 8:
                registrarVenda();
                break;
            case 9:
                listarVendas();
                break;
            case 0:
                console.log(Cores.Yellow + "Sistema finalizado." + Cores.Reset);
                process.exit(0);
            default:
                console.log(Cores.Red + "Opção inválida!" + Cores.Reset);
                break;
        }

    } while(opcao !== 0);
}

main();
