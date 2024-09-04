import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import styles from '../styles/DetalhesStyles';
import Item from "../models/Item";
import CreateStyles from '../styles/CreateStyles';
import CheckBox from '@react-native-community/checkbox';

const ListaDetalhesScreen = ({ navigation, route }) => {
  const { lista } = route.params;
  const [descricao, setDescricao] = useState('');

  const HandleSalvarItem = () => {
    const novoItem = new Item(Date.now().toString(), descricao);
    lista.adicionarItem(novoItem);
    navigation.navigate('Detalhes', { lista: lista });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{lista.titulo}</Text>
      <FlatList
        data={lista.itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
      <TextInput
        style={CreateStyles.input}
        placeholder="Digite o item"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Salvar" onPress={HandleSalvarItem} />
    </View>
  );
};

export default ListaDetalhesScreen;
