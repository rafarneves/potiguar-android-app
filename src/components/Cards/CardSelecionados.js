import { View, StyleSheet, ImageBackground, Text } from 'react-native';


export default function CardSelecionados({props}) {
    return(
        <View style={styles.card} shadowOffset={{height: 1}} elevation={2} shadowColor="black" shadowOpacity={1}>
            <View style={styles.img}>
                <ImageBackground source={props.url} resizeMode="contain" style={{flex: 1}}/>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{props.titulo}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, columnGap: 2}}>
                    <Text style={{fontSize: 14}}>R${props.valorAntigo}</Text>
                    <View style={{backgroundColor: '#1CED31', paddingHorizontal: 2}}>
                        <Text style={{fontSize: 14, color: 'white'}}>{props.porcentagemDesconto}% OFF</Text>
                    </View>
                </View>
                <Text style={{marginTop: 8, fontSize: 22, fontWeight: 'bold'}}>R${props.valorNovo}</Text>
                <Text style={{marginTop: 6}}>{props.quantParcelas}x de {props.valorParcela} sem juros</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 348,
        width: 186,
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'column'
    },
    img: {
        width: 150,
        height: 147,
        backgroundColor: 'white',
        marginTop: 10
    }
  })