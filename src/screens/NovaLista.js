import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Lista from '../models/Lista';
import styles from '../styles/CreateStyles';

const NovaListaScreen = ({ navigation, route }) => {
  const [titulo, setTitulo] = useState('');
  const [itens, setItens] = useState('');
  const { setListas } = route.params; // Obtém a função para atualizar a lista da HomeScreen

  const handleSalvarLista = () => {
    const novaLista = new Lista(Date.now().toString(), titulo, itens.split(',').map(item => item.trim()));
    setListas(prevListas => [...prevListas, novaLista]);
    navigation.navigate('DetalhesLista', { lista: novaLista });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o título da nova lista"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite os itens, separados por vírgula"
        value={itens}
        onChangeText={setItens}
      />
      <Button title="Salvar" onPress={handleSalvarLista} />
    </View>
  );
};

export default NovaListaScreen;
