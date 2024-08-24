export default class Item {
    constructor(id, descricao, concluido = false) {
      this.id = id;
      this.descricao = descricao;
      this.concluido = concluido;
    }

    editarConcluido() {
      this.concluido = !this.concluido;
    }
  }
