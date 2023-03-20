import { SafeAreaView, Text, View, ScrollView, FlatList, ImageBackground, StyleSheet, StatusBar, Button } from 'react-native';
import LocalSection from '../../components/Local/LocalSection';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import PromoSection from '../../components/PromoSection/PromoSection';
import SpecialSelectionSection from '../../components/SpecialSelectionSection/SpecialSelectionSection';
import SpecialOfferSection from '../../components/SpecialOfferSection/SpecialOfferSection';
import EletroSection from '../../components/EletroSection/EletroSection';
import DesejadoSection from '../../components/DesejadoSection/DesejadoSection';
import SelecionadoSection from '../../components/SelecionadoSection/SelecionadoSection';
import FooterSection from '../../components/FooterSection/FooterSection';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FreteGratis from '../../assets/img/promo-frete-gratis.png'
import VoltaAulas from '../../assets/img/promo-volta-aulas.png'

import ProductDetailsScreen from '../ProductDetails/ProductDetails';

const HomeStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

    const handleClick = () => {
        navigation.navigate('Details')
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='red' />
        <FlatList 
            data={[]}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
                <View style={{flex: 1}}>
                    <View style={{backgroundColor: 'red', width: '100%', height: 80}}></View>
                    <LocalSection />
                    <CategoriesSection />
                    <PromoSection />
                    <SpecialSelectionSection />
                    <SpecialOfferSection click={handleClick} />
                    
                    <View style={styles.section}>
                        <View style={styles.banner}>
                            <ImageBackground source={FreteGratis} resizeMode="contain" style={{flex: 1}}/>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.banner}>
                            <ImageBackground source={VoltaAulas} resizeMode="contain" style={{flex: 1}}/>
                        </View>
                    </View>

                    <EletroSection />

                    <DesejadoSection />
                    
                    <SelecionadoSection />

                    <FooterSection />
                </View>
            )}
        />
      </SafeAreaView>
    );
}

export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomePrincipal" component={HomeScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name="Details" component={ProductDetailsScreen}  />
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