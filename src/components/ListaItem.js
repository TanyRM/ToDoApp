import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ListaItem = ({ item, onPress, onDelete, styles }) => (
  <View style={styles.listaItem}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.listaTitulo}>{item.titulo}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onDelete}>
      <Text style={styles.excluirButton}>Excluir</Text>
    </TouchableOpacity>
  </View>
);

export default ListaItem;
