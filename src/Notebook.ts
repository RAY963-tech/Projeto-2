import { Eletronico } from "./model/Eletronico";
import { Produto } from "./model/Produto";

export class Notebook extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        public marca: string,
        public garantia: number,
        public processador: string,
        public ram: number
    ) {
        super(id, nome, preco, quantidade);
    }
}
