import { Produto } from "./Produto";
import { Cliente } from "./Cliente";

export class Venda {
    constructor(
        public id: number,
        public cliente: Cliente,
        public produto: Produto,
        public quantidade: number
    ) {}
}
