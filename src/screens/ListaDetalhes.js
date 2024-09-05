import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import styles from '../styles/DetalhesStyles';
import Item from '../models/Item';
import CreateStyles from '../styles/CreateStyles';

const ListaDetalhesScreen = ({ navigation, route }) => {
  const { lista } = route.params; // Obtém a lista passada como parâmetro
  const [descricao, setDescricao] = useState('');
  const [itens, setItens] = useState([]);

  // Inicializa os itens da lista ao carregar a tela
  useEffect(() => {
    if (lista?.itens) {
      setItens([...lista.itens]); // Inicializa o estado com os itens existentes da lista
    }
  }, [lista]);

  const handleSalvarItem = () => {
    if (descricao.trim().length === 0) {
      alert('Por favor, digite uma descrição para o item.');
      return;
    }

    const novoItem = new Item(Date.now().toString(), descricao); // Cria um novo item
    lista.adicionarItem(novoItem); // Adiciona o item à lista
    setItens([...lista.itens]); // Atualiza o estado com a nova lista de itens
    setDescricao(''); // Limpa o campo de texto

    console.log('Novo item adicionado:', novoItem);
    console.log('Itens após adição:', lista.itens); // Verifica o conteúdo da lista após adição
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{lista.titulo}</Text>

      <FlatList
        data={itens}
        keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())} // Verifica se item e item.id existem
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.descricao}</Text> // Exibe a descrição do item
        )}
      />

      <TextInput
        style={CreateStyles.input}
        placeholder="Digite o item"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button title="Salvar" onPress={handleSalvarItem} />
    </View>
  );
};

export default ListaDetalhesScreen;
