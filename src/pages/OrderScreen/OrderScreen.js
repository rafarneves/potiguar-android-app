import { useRoute } from "@react-navigation/native";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default function OrderScreen() {

    const route = useRoute();

    const lista = [
        {
            name: 'Mais vendidos',
            id: '1',
            active: false
        },
        {
            name: 'Mais recentes',
            id: '2',
            active: true
        },
        {
            name: 'Preço: Maior para menor',
            id: '3',
            active: false
        },
        {
            name: 'Preço: Menor para maior',
            id: '4',
            active: false
        }
    ]

    const renderLista = ({ item }) => {
        return (
            <TouchableHighlight activeOpacity={0.9} underlayColor="#DDDDDD">
                <View>
                    <View style={ item.active === false ? {paddingVertical: 20,borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 15, justifyContent: 'center'} : 
                                  {paddingVertical: 20,borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 15, justifyContent: 'center', borderLeftWidth: 4, borderLeftColor: 'red'}}>
                        <Text style={{color: 'black', fontWeight: 'normal', fontSize: 20}}>{item.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList 
                key={item => item.id}
                data={lista}
                renderItem={renderLista}
                keyExtractor={item => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{backgroundColor: 'white'}}
            />
        </SafeAreaView>
        
    )
}