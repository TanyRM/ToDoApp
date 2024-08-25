import Lista from '../models/Lista';

export const criarNovaLista = (listas, setListas) => {
  const novaLista = new Lista(Date.now().toString(), 'Nova Lista');
  setListas([...listas, novaLista]);
};

export const excluirLista = (id, listas, setListas) => {
  setListas(listas.filter(lista => lista.id !== id));
};
