import { SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'

export default function FinalizacaoScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 100, backgroundColor: 'white', paddingHorizontal: 15, justifyContent: 'flex-end', paddingVertical: 15}}>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>Entrega</Text>
                        <Text style={{color: '#878787'}}>Pagamento</Text>
                        <Text style={{color: '#878787'}}>Finalização</Text>
                    </View>
                    <View style={{backgroundColor: '#EAEAEA', height: 10, borderRadius: 50, marginTop: 5, width: '100%'}}>
                        <View style={{backgroundColor: 'red', height: 10, borderRadius: 50, width: '100%'}}></View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 15}}>
                <View style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Cohama</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30}}>
                            <Text>R$39,90</Text>
                            <View style={{borderWidth: 2, borderRadius: 20, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'red'}}>
                                <View style={{width: 12, height: 12, backgroundColor: 'red', borderRadius: 20}}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Moto</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30}}>
                            <Text>R$39,90</Text>
                            <View style={{borderWidth: 2, borderRadius: 20, width: 20, height: 20}}>
                                
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Carro</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30}}>
                            <Text>R$39,90</Text>
                            <View style={{borderWidth: 2, borderRadius: 20, width: 20, height: 20}}>
                                
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 153, paddingHorizontal: 15, paddingVertical: 17}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <Text style={{color: '#878787'}}>Total do pedido</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>R$1.230,00</Text>
                        <Text>em até 12x sem juros</Text>
                    </View>
                </View>
                <TouchableHighlight style={{backgroundColor: '#19CE3D', paddingVertical: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}
                >
                <View>
                    <Text style={{color: 'white'}}>CONTINUAR PARA PAGAMENTO</Text>
                </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}