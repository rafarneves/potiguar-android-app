import { FlatList, StyleSheet, Text, View } from "react-native";
import CardSelecionados from "../Cards/CardSelecionados";
import ArCondicionado from '../../assets/img/ar-condicionado.jpg'
import GuardaSol from '../../assets/img/guarda-sol.jpg'
import Umidificador from '../../assets/img/umidificador.jpg'
import Ventilador from '../../assets/img/ventilador.jpg'

export default function SelecionadoSection() {

    const selecionados = [
        {
            id: '1',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: ArCondicionado,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: ArCondicionado,
            exclusivo: false
        },
        {
            id: '2',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: GuardaSol,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: GuardaSol,
            exclusivo: true
        },
        {
            id: '3',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: Umidificador,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: Ventilador,
            exclusivo: false
        },
        {
            id: '4',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: Ventilador,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: Umidificador,
            exclusivo: false
        },
        {
            id: '5',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: ArCondicionado,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: ArCondicionado,
            exclusivo: false
        },
        {
            id: '6',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: GuardaSol,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: GuardaSol,
            exclusivo: true
        },
        {
            id: '7',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: Umidificador,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: Ventilador,
            exclusivo: false
        },
        {
            id: '8',
            titulo: 'Ar Condicionado Split 9000 Btus Consul Frio Classe A',
            url: Ventilador,
            valorAntigo: '1.699,00',
            valorNovo: '1.699,00',
            porcentagemDesconto: '26',
            quantParcelas: '12',
            valorParcela: '147,90', 
            url: Umidificador,
            exclusivo: false
        }
    ];

    const renderSelecionados = ({item}) => {
        return (
            <CardSelecionados props={item} />
        )
    }

    return(
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selecionamos para você</Text>
            <FlatList
                key={item => item.id}
                columnWrapperStyle={{justifyContent: 'space-between', columnGap: 10}}
                numColumns={2}
                data={selecionados}
                renderItem={renderSelecionados}
                keyExtractor={item => item.id}
                horizontal={false}
                scrollEnabled={false}
                style={{flex: 1, rowGap: 10}}
            />
        </View>
    )
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