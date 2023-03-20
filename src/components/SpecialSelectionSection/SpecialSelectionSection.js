import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import Boxes from '../../assets/img/boxes.jpg'
import CleanHouse from '../../assets/img/clean-house.jpg'
import Cooktop from '../../assets/img/cooktop.jpg'
import Decoracao from '../../assets/img/decoracao.jpg'

export default function SpecialSelectionSection() {

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
    ]

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

    return (
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
                style={{flex: 1, rowGap: 20}}
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
    }
  })