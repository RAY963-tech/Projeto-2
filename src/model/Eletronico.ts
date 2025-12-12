import { Produto } from "../model/Produto";

export class Eletronico extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        public marca: string,
        public garantia: number
    ) {
        super(id, nome, preco, quantidade);
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Marca: ${this.marca}, Garantia: ${this.garantia} meses`);
    }
}
