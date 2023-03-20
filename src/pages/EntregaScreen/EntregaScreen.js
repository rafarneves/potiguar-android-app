import { SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

export default function EntregaScreen() {

    const [checked, setChecked] = useState('first');

    const navigation = useNavigation();
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
                        <View style={{backgroundColor: 'red', height: 10, borderRadius: 50, width: '33.33%'}}></View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 15}}>
                <View style={{widh: '100%', flexDirection: 'row', height: 43}}>
                    <View style={{width: '50%', backgroundColor: 'white', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Receber</Text>
                    </View>
                    <View style={{width: '50%', backgroundColor: '#EAEAEA', borderTopRightRadius: 20, borderBottomEndRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Retirar</Text>
                    </View>
                </View>
                <View style={{height: 130, backgroundColor: 'white', marginTop: 20, paddingHorizontal: 22, paddingVertical: 17}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 20}}>
                        <EvilIcon name="location" size={25} />
                        <Text style={{flex: 1}}>Avenida Miguel Castro, 600, Lagoa Nova, Natal/RN</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 20}}>
                        <Text></Text>
                        <Text style={{flex: 1, marginLeft: 25, color: '#878787', marginTop: 10, marginBottom: 10}}>Rafael Neves</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 25}}>
                        <FontAwesome5Icon name="exchange-alt" size={19} color="#0076FF"/>
                        <Text style={{flex: 1, color: '#0076FF'}}>Trocar endereço</Text>
                    </View>
                </View>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}} onPress={() => setChecked('first')}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Cohama</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>R$39,90</Text>
                            <RadioButton
                                value="first" color="red"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}} onPress={() => setChecked('second')}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Moto</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>R$39,90</Text>
                            <RadioButton
                                value="second" color="red"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={{height: 50, backgroundColor: 'white', marginTop: 15, paddingHorizontal: 22, justifyContent: 'center'}} onPress={() => setChecked('three')}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 1, columnGap: 20}}>
                            <FeatherIcon name="truck" size={20} />
                            <Text>Carro</Text>
                        </View>
                        <View style={{flexDirection: 'row', columnGap: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>R$39,90</Text>
                            <RadioButton
                                value="three" color="red"
                                status={ checked === 'three' ? 'checked' : 'unchecked' }
                                
                            />
                        </View>
                    </View>
                </TouchableHighlight>
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
                    onPress={() => navigation.navigate('Pagamento')}
                >
                <View>
                    <Text style={{color: 'white'}}>CONTINUAR PARA PAGAMENTO</Text>
                </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}