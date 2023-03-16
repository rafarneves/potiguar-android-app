import { SafeAreaView, Text, View, ScrollView, FlatList, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconR from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import SumerSaleBanner from '../../assets/img/summer-sale.jpg'
import PerfumeBanner from '../../assets/img/perfume-banner.png'
import BlackFriday from '../../assets/img/black-friday.jpg'
import Boxes from '../../assets/img/boxes.jpg'
import CleanHouse from '../../assets/img/clean-house.jpg'
import Cooktop from '../../assets/img/cooktop.jpg'
import Decoracao from '../../assets/img/decoracao.jpg'

export default function HomeScreen() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const dados = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          url: SumerSaleBanner
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          url: PerfumeBanner
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          url: BlackFriday
        },
      ];

      const categorias = [
        {
            id: '1',
            color: 'white',
            icon: <Icon name="shower" size={25} color="#878787" />,
            name: 'Banheiro'
        },
        {
            id: '2',
            color: 'white',
            icon: <IconR name="chef-hat" size={25} color="#878787" />,
            name: 'Cozinha'
        },
        {
            id: '3',
            color: 'white',
            icon: <IconR name="air-conditioner" size={25} color="#878787" />,
            name: 'Climatização'
        },
        {
            id: '4',
            color: 'white',
            icon: <IconR name="flower-tulip-outline" size={25} color="#878787" />,
            name: 'Jardim'
        },
        {
            id: '5',
            color: 'white',
            icon: <IconR name="flower-tulip-outline" size={25} color="#878787" />,
            name: 'Decoração'
        },
        {
            id: '6',
            color: 'white',
            icon: <Icon name="shower" size={25} color="#878787" />,
            name: 'Banheiro'
        },
        {
            id: '7',
            color: 'white',
            icon: <IconR name="chef-hat" size={25} color="#878787" />,
            name: 'Cozinha'
        },
        {
            id: '8',
            color: 'white',
            icon: <IconR name="air-conditioner" size={25} color="#878787" />,
            name: 'Climatização'
        },
        {
            id: '9',
            color: 'white',
            icon: <IconR name="flower-tulip-outline" size={25} color="#878787" />,
            name: 'Jardim'
        },
        {
            id: '10',
            color: '#ED1C24',
            icon: <IconR name="plus" size={35} color="white" />,
            name: 'Veja mais'
        }
    ];

    const selecaoEspecial = [
        {
          id: '1',
          title: 'Utensílios domésticos',
          url: CleanHouse
        },
        {
          id: '2',
          title: 'Mesa e decoração',
          url: Decoracao
        },
        {
          id: '3',
          title: 'Utensílios domésticos',
          url: Cooktop
        },
        {
          id: '4',
          title: 'Mesa e decoração',
          url: Boxes
        },
      ];

    const renderSelecaoEspecial = ({ item }) => {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{ width: 175, height: 114, backgroundColor: 'white'}}>
                    <ImageBackground source={item.url} resizeMode="cover" style={{flex: 1}}/>
                </View>
                <Text style={{fontSize: 12, marginTop: 5}}>{item.title}</Text>
            </View>
        )
    }
    
    const renderPromocoes = ({ item }) => {
        return (
            <View style={{ width: 339, height: 241, backgroundColor: 'red', borderRadius: 20}}>
                <ImageBackground source={item.url} borderRadius={20} style={{flex: 1}}/>
            </View>
        )
    }

    const renderCategorias = ({ item }) => {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{width: 61, height: 61, backgroundColor: item.color, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                    {item.icon ? item.icon : ''}
                </View>
                <Text style={{fontSize: 10.75, marginTop: 5}}>{item.name}</Text>
            </View>
        )
    }

    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let address = await Location.reverseGeocodeAsync(location.coords)
            setLocation(address);
        })();
    }, []);

    let loc = 'Carregando..';
    if (errorMsg) {
        loc = errorMsg;
    } else if (location) {
        loc = JSON.stringify(location[0].subregion).split('"').join('');
    }


    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#ecf0f1" />
        <ScrollView>
            <View style={{backgroundColor: 'red', width: '100%', height: 100}}></View>
            <View style={{backgroundColor: 'white', height: 42, justifyContent: 'space-between', paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="location-sharp" color='#ED1C24' size={20} />
                    <Text style={{marginLeft: 10}}>Você está em: <Text style={{fontWeight: 'bold'}}>{loc}</Text></Text>
                </View>
                <Icon name="chevron-right" color='#ED1C24' size={20} />
            </View>
            <View style={{marginTop: 30}}>
                <View>
                    <FlatList 
                        key={item => item.id}
                        columnWrapperStyle={{justifyContent: 'space-evenly', marginTop: 20}}
                        data={categorias}
                        renderItem={renderCategorias}
                        keyExtractor={item => item.id}
                        numColumns={5}
                        horizontal={false}
                        scrollEnabled={false}
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-evenly'}}
                    />
                </View>
            </View>
            <View style={styles.section}>
                <FlatList
                    data={dados}
                    renderItem={renderPromocoes}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', columnGap: 10}}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Seleção especial para você</Text>
                <FlatList
                    key={item => item.id}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={2}
                    data={selecaoEspecial}
                    renderItem={renderSelecaoEspecial}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    scrollEnabled={false}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', rowGap: 20}}
                />
            </View>
        </ScrollView>
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
        fontSize: 22,
        marginBottom: 22
    }
  })