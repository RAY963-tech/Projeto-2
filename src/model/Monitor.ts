import { Eletronico } from "./Eletronico";

export class Monitor extends Eletronico {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidade: number,
        marca: string,
        garantia: number,
        public resolucao: string,
        public frequenciaHz: number
    ) {
        super(id, nome, preco, quantidade, marca, garantia);
    }

    visualizar(): void {
        super.visualizar();
        console.log(`Resolução: ${this.resolucao}, Frequência: ${this.frequenciaHz} Hz`);
    }
}
