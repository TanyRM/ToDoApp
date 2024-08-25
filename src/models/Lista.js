export default class Lista {
    constructor(id, titulo, itens = []) {
      this.id = id;
      this.titulo = titulo;
      this.itens = itens; // Array de objetos do tipo Item
    }

    adicionarItem(item) {
      this.itens.push(item);
    }

    removerItem(itemId) {
        let index = this.itens.indexOf(itemId);

        if (index > -1) {
            this.itens.splice(index, 1);
          }
    }
  }
