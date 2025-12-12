import * as readlineSync from "readline-sync";

export const Entrada = {
    perguntaInt: (msg: string) => readlineSync.questionInt(msg),
    perguntaFloat: (msg: string) => readlineSync.questionFloat(msg),
    perguntaString: (msg: string) => readlineSync.question(msg)
};
