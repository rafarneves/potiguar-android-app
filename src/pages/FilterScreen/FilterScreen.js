import { useRoute } from "@react-navigation/native";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default function FilterScreen() {

    const route = useRoute();

    const lista = [
        {
            name: 'Tipo',
            filter: 'Cooktop',
            id: '1',
            active: true
        },
        {
            name: 'Cor',
            filter: 'Amarelo',
            id: '2',
            active: true
        },
        {
            name: 'Quantidade de bocas',
            filter: '5 bocas',
            id: '3',
            active: true
        },
        {
            name: 'Voltagem',
            filter: [],
            id: '4',
            active: false
        },
        {
            name: 'Linha',
            filter: [],
            id: '5',
            active: false
        },
        {
            name: 'Ideal para',
            filter: [],
            id: '6',
            active: false
        },
        {
            name: 'Preço por',
            filter: [],
            id: '7',
            active: false
        }
    ]

    const renderLista = ({ item }) => {
        return (
            <TouchableHighlight activeOpacity={0.9} underlayColor="#DDDDDD">
                <View style={item.active === true ? 
                {
                    paddingVertical: 10, 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#DFDFDF', 
                    paddingHorizontal: 15, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderLeftWidth: 4,
                    borderLeftColor: 'red'
                } : {
                    paddingVertical: 20, 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#DFDFDF', 
                    paddingHorizontal: 15, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                }}>
                    <View style={{flexDirection: 'column', columnGap: 12, justifyContent: 'center'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>{item.name}</Text>
                        {
                            item.active ? <Text style={{color: 'black', fontWeight: 'normal'}}>{item.filter}</Text> : ""}
                    </View>
                    <View>
                        <EntypoIcon name="chevron-thin-down" size={15} color="#4A4A4A"/>
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