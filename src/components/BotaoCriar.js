import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const BotaoCriar = ({ onPress, styles }) => (
  <TouchableOpacity style={styles.botaoCriar} onPress={onPress}>
    <Text style={styles.textoBotaoCriar}>+</Text>
  </TouchableOpacity>
);

export default BotaoCriar;
