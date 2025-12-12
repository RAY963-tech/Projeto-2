import * as fs from "fs";

export class Persistencia {
    static salvar(arquivo: string, dados: any): void {
        fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2), "utf-8");
    }

    static carregar(arquivo: string): any {
        if (fs.existsSync(arquivo)) {
            const dados = fs.readFileSync(arquivo, "utf-8");
            return JSON.parse(dados);
        }
        return [];
    }
}
