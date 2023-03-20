import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';


export default function CardOferta({props, funcao}) {
    return(
        <TouchableOpacity style={styles.card} 
            shadowOffset={{height: 6}} 
            elevation={6} 
            shadowColor="black" 
            shadowOpacity={1}
            onPress={funcao}
            >
            <View style={styles.img}>
                <ImageBackground source={props.url} resizeMode="contain" style={{flex: 1}}/>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{props.titulo}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 14, columnGap: 2}}>
                    <Text style={{fontSize: 14}}>R${props.valorAntigo}</Text>
                    <View style={{backgroundColor: '#1CED31', paddingHorizontal: 2}}>
                        <Text style={{fontSize: 14, color: 'white'}}>{props.porcentagemDesconto}% DE DESCONTO</Text>
                    </View>
                </View>
                <Text style={{marginTop: 7, fontSize: 22, fontWeight: 'bold'}}>R${props.valorNovo}</Text>
                <Text style={{marginTop: 6}}>{props.quantParcelas}x de {props.valorParcela} sem juros</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 160,
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 6,
        flexDirection: 'row',
        columnGap: 18,
    },
    img: {
        width: 126,
        height: 109,
        backgroundColor: 'white',
    }
  })