import { SafeAreaView, Text, View, ScrollView, FlatList, ImageBackground, StyleSheet, StatusBar, Button, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { useNavigation, useRoute } from '@react-navigation/native';
import SelecionadoSection from '../../components/SelecionadoSection/SelecionadoSection';


export default function CategorieSearch() {
  const navigation = useNavigation();
  const route = useRoute();

  const { routeName } = route.params;

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='red' />
        <View style={{backgroundColor: 'red', width: '100%', paddingVertical: 10, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', borderTopWidth: 0}}>
          <SearchBar />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%', columnGap: 46, paddingTop: 20, paddingBottom: 10}}>
            <TouchableOpacity style={{flexDirection: 'row', columnGap: 10}} onPress={() => navigation.navigate('Order', {
                routeName
            })}>
                <FontAwesome5Icon name="sort-amount-down-alt" size={18} color="white" />
                <Text style={{color: 'white'}}>Ordenar por</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{flexDirection: 'row', columnGap: 10}} onPress={() => navigation.navigate('Filter', {
                routeName
            })}>
                <AntDesignIcon name="filter" size={18} color="white" />
                <Text style={{color: 'white'}}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList 
            data={[]}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
                <SelecionadoSection />
            )} 
        />
      </SafeAreaView>
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