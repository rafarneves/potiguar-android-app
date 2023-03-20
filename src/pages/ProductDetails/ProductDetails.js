import { SafeAreaView, Text, View, ScrollView, FlatList, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import PromoSection from '../../components/PromoSection/PromoSection';
import SpecialSelectionSection from '../../components/SpecialSelectionSection/SpecialSelectionSection';
import EletroSection from '../../components/EletroSection/EletroSection';
import DesejadoSection from '../../components/DesejadoSection/DesejadoSection';
import SelecionadoSection from '../../components/SelecionadoSection/SelecionadoSection';
import FooterSection from '../../components/FooterSection/FooterSection';

export default function ProductDetailsScreen() {

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <FlatList 
                data={[]}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <View style={{flex: 1}}>
                        <CategoriesSection />
                        <PromoSection />
                        <SpecialSelectionSection />

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