import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Lista from '../models/Lista';
import styles from '../styles/CreateStyles';

const NovaListaScreen = ({ navigation, route }) => {
  const [titulo, setTitulo] = useState('');
  const [itens, setItens] = useState('');
  const { setListas } = route.params;

  const handleSalvarLista = () => {
    const novaLista = new Lista(Date.now().toString(), titulo, itens.split(',').map(item => item.trim()));
    setListas(prevListas => [...prevListas, novaLista]);
    navigation.navigate('Detalhes', { lista: novaLista });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o título da lista"
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
  
      <Button title="Cancelar" onPress={()=>navigation.navigate('Home')} />
    </View>
  );
};

export default NovaListaScreen;
