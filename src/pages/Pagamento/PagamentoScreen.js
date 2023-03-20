import { SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'
import Octicon from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";

export default function PagamentoScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 100, backgroundColor: 'white', paddingHorizontal: 15, justifyContent: 'flex-end', paddingVertical: 15}}>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{color: '#878787' }}>Entrega</Text>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>Pagamento</Text>
                        <Text style={{color: '#878787'}}>Finalização</Text>
                    </View>
                    <View style={{backgroundColor: '#EAEAEA', height: 10, borderRadius: 50, marginTop: 5, width: '100%'}}>
                        <View style={{backgroundColor: 'red', height: 10, borderRadius: 50, width: '67%'}}></View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 15}}>
                <TouchableOpacity style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}} shadowOffset={{height: 1}} elevation={2} shadowColor="black" shadowOpacity={1}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <AntDesign name="creditcard" size={22} />
                            <Text>Cartão de crédito</Text>
                        </View>
                        <Octicon name="chevron-right" size={22} color="#878787"/>
                    </View>
                </TouchableOpacity>
                <View style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingLeft: 22, paddingRight: 17, justifyContent: 'center'}} shadowOffset={{height: 1}} elevation={2} shadowColor="black" shadowOpacity={1}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={22} />
                            <Text>PIX</Text>
                        </View>
                        <Octicon name="circle" size={20} color="#878787" />
                    </View>
                </View>
                <View style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}} shadowOffset={{height: 1}} elevation={2} shadowColor="black" shadowOpacity={1}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <MaterialIcon name="percent" size={22} />
                            <Text>Possui cupom?</Text>
                        </View>
                        <Octicon name="chevron-right" size={22} color="#878787" />
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 153, paddingHorizontal: 15, paddingVertical: 17, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#878787'}}>Frete</Text>
                    <Text>R$39,90</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#878787'}}>Total</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>R$1.230,00</Text>
                </View>
                <TouchableHighlight style={{backgroundColor: '#19CE3D', paddingVertical: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Finalizacao')}
                >
                <View>
                    <Text style={{color: 'white'}}>CONTINUAR PARA PAGAMENTO</Text>
                </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}