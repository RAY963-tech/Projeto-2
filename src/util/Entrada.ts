import * as readlineSync from "readline-sync";

export const Entrada = {
    perguntaInt: (msg: string): number => readlineSync.questionInt(msg),
    perguntaFloat: (msg: string): number => readlineSync.questionFloat(msg),
    perguntaString: (msg: string): string => readlineSync.question(msg),
};
