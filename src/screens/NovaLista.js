import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import Lista from '../models/Lista';
import styles from '../styles/CreateStyles';

const NovaListaScreen = ({navigation, route}) => {
  const [titulo, setTitulo] = useState('');
  const [itens, setItens] = useState('');
  const {setListas} = route.params;

  const handleSalvarLista = () => {
    // Verifica se a entrada de itens não está vazia
    const itensArray = itens.trim()
      ? itens.split(',').map(item => item.trim())
      : [];

    const novaLista = new Lista(Date.now().toString(), titulo, itensArray);
    setListas(prevListas => [...prevListas, novaLista]);
    navigation.navigate('Detalhes', {lista: novaLista});
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

      <Button title="Salvar" onPress={handleSalvarLista} color="#007BFF" />
      <View style={styles.buttonContainer}>
        <Button
          title="Cancelar"
          onPress={() => navigation.navigate('Home')}
          color="#cc0d00"
        />
      </View>
    </View>
  );
};

export default NovaListaScreen;
