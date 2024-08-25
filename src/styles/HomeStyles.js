import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cumprimento: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listaTitulo: {
    fontSize: 18,
  },
  excluirButton: {
    color: 'red',
  },
  botaoCriar: {
    backgroundColor: '#007bff',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotaoCriar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
