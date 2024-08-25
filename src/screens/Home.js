import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListaItem from '../components/ListaItem';
import BotaoCriar from '../components/BotaoCriar';
import { cumprimentarUsuario } from '../utils/timeUtils';
import { criarNovaLista, excluirLista } from '../services/listaService';
import styles from '../styles/homeStyles';
import Lista from '../models/Lista';

const HomeScreen = ({ navigation }) => {
  const [listas, setListas] = useState([
    new Lista('1', 'Compras'),
    new Lista('2', 'Trabalho'),
    new Lista('3', 'Estudos'),
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.cumprimento}>{cumprimentarUsuario()}, Usuário!</Text>

      <FlatList
        data={listas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListaItem
            item={item}
            onPress={() => navigation.navigate('DetalhesLista', { id: item.id })}
            onDelete={() => excluirLista(item.id, listas, setListas)}
            styles={styles}
          />
        )}
      />

      <BotaoCriar onPress={() => criarNovaLista(listas, setListas)} styles={styles} />
    </View>
  );
};

export default HomeScreen;
