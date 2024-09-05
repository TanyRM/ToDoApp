import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import styles from '../styles/DetalhesStyles';
import Item from '../models/Item';
import CreateStyles from '../styles/CreateStyles';

const ListaDetalhesScreen = ({ route }) => {
  const { lista } = route.params;
  const [descricao, setDescricao] = useState('');
  const [itens, setItens] = useState([]);

  useEffect(() => {
    if (lista?.itens) {
      setItens([...lista.itens]);
    }
  }, [lista]);

  const handleSalvarItem = () => {
    if (descricao.trim().length === 0) {
      // eslint-disable-next-line no-alert
      alert('Por favor, insira um item.');
      return;
    }

    const novoItem = new Item(Date.now().toString(), descricao);
    lista.adicionarItem(novoItem);
    setItens([...lista.itens]);
    setDescricao('');

    console.log('Novo item adicionado:', novoItem);
    console.log('Itens após adição:', lista.itens);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{lista.titulo}</Text>

      <FlatList
        data={itens}
        keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.descricao}</Text>
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
