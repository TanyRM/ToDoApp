export default class User {
    constructor(nome, listas = []) {
        this.nome = nome;
        this.listas = listas;
    }

    adicionarLista(lista) {
        this.listas.push(lista);
    }

    excluirLista(listaId) {
        let index = this.listas.indexOf(listaId);

        if (index > -1) {
            this.listas.splice(index, 1);
        }
    }
}
