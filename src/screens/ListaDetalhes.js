import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/DetalhesStyles';

const ListaDetalhesScreen = ({ route }) => {
  const { lista } = route.params;

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
    </View>
  );
};

export default ListaDetalhesScreen;
