import { SafeAreaView, Text, View, ScrollView, FlatList, ImageBackground, StyleSheet, StatusBar, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FilterScreen from '../FilterScreen/FilterScreen';
import OrderScreen from '../OrderScreen/OrderScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FreteGratis from '../../assets/img/promo-frete-gratis.png'
import VoltaAulas from '../../assets/img/promo-volta-aulas.png'
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { useNavigation, useRoute } from '@react-navigation/native';
import CategorieSearch from '../CategorieSearch/CategorieSearch';
import EntregaScreen from '../EntregaScreen/EntregaScreen';

const HomeStack = createNativeStackNavigator();


function CategoriesScreen() {

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='red' />
        <View style={{backgroundColor: 'red', width: '100%', height: 100, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Categorias da potiguar</Text>
          <SearchBar />
        </View>
        <View style={{flex: 1}}>
          <CategoriesList />
        </View>
      </SafeAreaView>
    );
}

export default function CategorieStackScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBack = () => {
    navigation.navigate('CategoriesScreen');
  }

  return (
    <HomeStack.Navigator screenOptions={{headerShadowVisible:false}}>
      <HomeStack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="CategorieSearch" component={CategorieSearch} options=
      {({route}) => ({
        headerTitle: route.params?.routeName,
        headerLeft: () => (
          <TouchableHighlight activeOpacity={1} onPress={handleBack}
          underlayColor="white" style={{borderRadius: 20, padding: 5}}>
            <FeatherIcon name="chevron-left" size={22} color="white" />
          </TouchableHighlight>
        ),
        headerStyle: {
          backgroundColor: 'red',
          width: '100%',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold'
        }
      })}/>
      <HomeStack.Screen name="Filter" component={FilterScreen} options=
      {({route}) => ({
        headerBackVisible: false,
        contentStyle: {
          borderTopWidth: 1,
          borderTopColor: '#D9D9D9'
        },
        headerTitle: 'Filtrar por',
        headerRight: () => (
          <View style={{alignItems: 'center', flexDirection: 'row', columnGap: 24}}>
            <TouchableOpacity>
              <Text style={{color: 'black', textDecorationLine: 'underline'}}>Limpar todos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CategorieSearch', {
              routeName: route.params?.routeName
            })}>
              <AntDesignIcon name="close" size={21} color="black" />
            </TouchableOpacity>
          </View>
        )
      })}></HomeStack.Screen>
      <HomeStack.Screen name="Order" component={OrderScreen} options=
        {({route}) => ({
          headerTitle: 'Ordenar Por',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
          contentStyle: {
            borderTopWidth: 1,
            borderTopColor: '#D9D9D9'
          },
          headerRight: () => (
            <View style={{alignItems: 'center', flexDirection: 'row', columnGap: 24}}>
              <TouchableOpacity onPress={() => navigation.navigate('CategorieSearch', {
                routeName: route.params?.routeName
              })}>
                <AntDesignIcon name="close" size={21} color="black" />
              </TouchableOpacity>
            </View>
          )
      })}>
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: '#4A4A4A',
        fontSize: 20,
        marginBottom: 22
    },
    banner: {
        height: 130,
    },
    footer: {
        marginTop: 70,
        flex: 1,
    },
    footerTop: {
        height: 60,
        backgroundColor: '#131313',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    textFooterTop: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    bannerFooterTop: {
        width: 87,
        height: 27
    }
  })