import { FlatList, Text, TouchableHighlight, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CategoriesList() {
    const navigation = useNavigation();
    const route = useRoute();

    const handleCategory = (value) => {
        navigation.navigate('CategorieSearch', {
            routeName: value.name,
        });
    }

    const lista = [
        {
            id: '1',
            name: 'Banheiro e Cozinha',
            icon: <Icon name="shower" size={22} color="#4E4E4E" />
        },
        {
            id: '2',
            name: 'Cama, Mesa e Banho',
            icon: <MaterialIcon name="chef-hat" size={22} color="#4E4E4E" />
        },
        {
            id: '3',
            name: 'Casa',
            icon: <MaterialIcon name="air-conditioner" size={22} color="#4E4E4E" />
        },
        {
            id: '4',
            name: 'Eletro e Eletrônicos',
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '5',
            name: "Ferramentas e EPI's",
            icon: <Icon name="tools" size={22} color="#4E4E4E" />
        },
        {
            id: '6',
            name: 'Iluminação',
            icon: <MaterialIcon name="lamp-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '7',
            name: 'Materiais de Construção',
            icon: <MaterialIcon name="duck" size={22} color="#4E4E4E" />
        },
        {
            id: '8',
            name: 'Materiais Elétricos',
            icon: <MaterialIcon name="duck" size={22} color="#4E4E4E" />
        },
        {
            id: '9',
            name: 'Materiais Hidráulicos e Bombas',
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '10',
            name: 'Móveis e decorações',
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '11',
            name: "Pisos e Revestimentos",
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '12',
            name: 'Portas, Janelas e Ferragens',
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '13',
            name: "Tintas e Acessórios",
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
        {
            id: '14',
            name: 'Utilidades domésticas',
            icon: <MaterialIcon name="flower-tulip-outline" size={22} color="#4E4E4E" />
        },
    ]

    const renderLista = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => handleCategory(item)} activeOpacity={0.9} underlayColor="#DDDDDD">
                <View style={{paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', columnGap: 12}}>
                        <View style={{width: 22, height: 22, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                            {item.icon}
                        </View>
                        <Text style={{color: '#878787', fontWeight: 'normal'}}>{item.name}</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" size={18} color="#4E4E4E" />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    return(
        <FlatList 
            key={item => item.id}
            data={lista}
            renderItem={renderLista}
            keyExtractor={item => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
        />
    )
}