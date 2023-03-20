import { useState } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform, FlatList, TouchableOpacity, ImageBackground, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import ArCondicionado from '../../assets/img/ar-condicionado.jpg'
import GuardaSol from '../../assets/img/guarda-sol.jpg'
import Umidificador from '../../assets/img/umidificador.jpg'
import Ventilador from '../../assets/img/ventilador.jpg'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntregaScreen from '../EntregaScreen/EntregaScreen';
import PagamentoScreen from '../Pagamento/PagamentoScreen';
import FinalizacaoScreen from '../FinalizacaoScreen/FinalizacaoScreen';

const HomeStack = createNativeStackNavigator();

function CartScreen() {

  const navigation = useNavigation();

  const [prazo, changePrazo] = useState('');

  const compras = [
    {
        id: '1',
        titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
        url: ArCondicionado,
        valor: '1.699,00',
    },
    {
        id: '2',
        titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
        url: GuardaSol,
        valor: '1.699,00',
    },
    {
        id: '3',
        titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
        url: Umidificador,
        valor: '1.699,00',
    },
    {
        id: '4',
        titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
        url: Ventilador,
        valor: '1.699,00',
    },
];

const renderCompras = ({item}) => {
  return (
    <TouchableOpacity style={styles.card} 
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.img}>
            <ImageBackground source={item.url} resizeMode="contain" style={{flex: 1}}/>
        </View>
        <Text style={{flex: 1, fontSize: 16}}>{item.titulo}</Text>
      </View>
      
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <View style={{flexDirection: 'row', columnGap: 5, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>QTD</Text>
          <TextInput
            style={{height: 30, borderWidth: 1, borderColor: '#EEEEEE', width: 40, paddingHorizontal: 10, borderRadius: 20, backgroundColor: '#F6F6F6'}}
            onChangeText={(e) => e}
            maxLength={2}
          />
        </View>
        <Text style={{fontSize: 20}}>R${item.valor}</Text>
      </View>
    </TouchableOpacity>
  )
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 100, backgroundColor: 'white', paddingHorizontal: 15, justifyContent: 'flex-end', paddingVertical: 15}}>
        <TextInput value={prazo} placeholder="Calcule o frete e o prazo" onChangeText={changePrazo} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 45, borderRadius: 20, padding: 15}}/>
      </View>
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <FlatList 
          keyExtractor={item => item.id}
          data={compras}
          renderItem={renderCompras}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, rowGap: 28, paddingVertical: 27}}
        />
      </View>
      
      <View style={{backgroundColor: 'white', height: 153, paddingHorizontal: 15, paddingVertical: 17}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <Text style={{color: '#878787'}}>Total do pedido</Text>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>R$1.230,00</Text>
            <Text>em até 12x sem juros</Text>
          </View>
        </View>
        <TouchableHighlight style={{backgroundColor: '#19CE3D', paddingVertical: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Entregas')}
        >
          <View style={{flexDirection: 'row', columnGap: 14}}>
            <FontAwesome5Icon name="cart-plus" size={20} color="white" />
            <Text style={{color: 'white'}}>COMPRAR</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default function EntregaStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="Entregas" component={EntregaScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="Pagamento" component={PagamentoScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="Finalizacao" component={FinalizacaoScreen} options={{headerShown: false}}/>
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'column',
    marginTop: 50,
    padding: 16,
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
  },
  card: {
    height: 160,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 10,
},
img: {
    width: 88,
    height: 76,
    backgroundColor: 'white',
}
});