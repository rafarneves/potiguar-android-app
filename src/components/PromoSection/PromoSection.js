import { FlatList, ImageBackground, View, StyleSheet } from "react-native";
import SumerSaleBanner from '../../assets/img/summer-sale.jpg'
import PerfumeBanner from '../../assets/img/perfume-banner.png'
import BlackFriday from '../../assets/img/black-friday.jpg'

export default function PromoSection() {

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

      const renderPromocoes = ({ item }) => {
            return (
                <View style={{ width: 339, height: 241, backgroundColor: 'red', borderRadius: 20}}>
                    <ImageBackground source={item.url} borderRadius={20} style={{flex: 1}}/>
                </View>
            )
        }
    return (
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
    )
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 15,
        marginTop: 30
    }
  })