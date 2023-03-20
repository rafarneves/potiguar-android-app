import { FlatList, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconR from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CategoriesSection() {

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

    return (
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
    )
}