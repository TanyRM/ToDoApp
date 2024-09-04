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
    width: 70,
    height: 70,
    backgroundColor: '#007bff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
  },
  textoBotaoCriar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
