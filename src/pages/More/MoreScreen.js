import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform } from 'react-native';

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Tela de Mais Conteúdos</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white',
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  text: {    
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  }
});