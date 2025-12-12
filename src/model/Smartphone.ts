import { Eletronico } from "./Eletronico";

export class Smartphone extends Eletronico {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        marca: string,
        garantia: number,
        public tamanhoTela: number,
        public bateria: number
    ) {
        super(id, nome, preco, quantidade, marca, garantia);
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Tamanho da tela: ${this.tamanhoTela} polegadas, Bateria: ${this.bateria} mAh`);
    }
}
