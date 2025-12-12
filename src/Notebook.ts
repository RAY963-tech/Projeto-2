import { Eletronico } from "./model/Eletronico";

export class Notebook extends Eletronico {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        marca: string,
        garantia: number,
        public processador: string,
        public ram: number
    ) {
        super(id, nome, preco, quantidade, marca, garantia);
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Processador: ${this.processador}, RAM: ${this.ram} GB`);
    }
}
