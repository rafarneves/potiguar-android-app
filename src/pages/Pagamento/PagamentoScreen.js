import { SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'
import Octicon from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import { List, RadioButton } from "react-native-paper";
import { useState } from "react";

export default function PagamentoScreen() {

    const [checked, setChecked] = useState('');
    const [cartao, setCartao] = useState('');
    const [titular, setTitular] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [cupom, setCupom] = useState('');

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
            <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 15, rowGap: 10}}>
                <List.Section>
                    <List.Accordion style={{paddingHorizontal: 20}}
                        title={<Text>Cartão de crédito</Text>}
                        left={() => <AntDesign name="creditcard" size={22} style={{marginRight: 10}} />}>
                        <View style={{backgroundColor: 'white', alignItems: 'flex-start', paddingLeft: 0}}>
                            <View style={{backgroundColor: 'white', width: '100%', paddingHorizontal: 20, rowGap: 10, paddingVertical: 10}}>
                                <TextInput placeholder="Número do cartão" value={cartao} onChangeText={setCartao} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10}}/>
                                <TextInput placeholder="Nome do titular" value={titular} onChangeText={setTitular} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10}}/>
                                <View style={{width: '100%', flexDirection: 'row', columnGap: 10, flex: 1}}>
                                    <TextInput placeholder="Validade (mm/aa)" value={validade} onChangeText={setValidade} style={{borderWidth: 1, flex: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10, width: '50%'}}/>
                                    <TextInput placeholder="CVV" value={cvv} onChangeText={setCvv} style={{borderWidth: 1, flex: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10, width: '50%'}}/>
                                </View>
                                <TextInput placeholder="Número de parcelas" value={parcelas} onChangeText={setParcelas} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10}}/>
                            </View>
                        </View>
                    </List.Accordion>
                </List.Section>
                <List.Section>
                    <List.Accordion style={{paddingLeft: 20, paddingRight: 15, paddingVertical: 0}} onPress={() => setChecked('first')}
                        title={<Text>PIX</Text>}
                        left={() => <FeatherIcon name="truck" size={22} style={{marginRight: 10}} />}
                        
                        right={() => (
                            <RadioButton
                            value="first" color="red"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                        />
                        )}
                    >
                        <View style={{backgroundColor: 'white', alignItems: 'flex-start', paddingLeft: 0}}>
                            <View style={{backgroundColor: 'white', width: '100%', paddingHorizontal: 20, rowGap: 10, paddingVertical: 12}}>
                                <Text style={{fontSize: 16, color: '#878787'}}>Após confirmar a compra, você receberá o código e poderá pagar com PIX no app do ou site do seu banco. A aprovação de pagamento é imediata!</Text>
                            </View>
                        </View>
                    </List.Accordion>
                </List.Section>
                <List.Section>
                    <List.Accordion style={{paddingHorizontal: 20}}
                        title={<Text>Possui cupom?</Text>}
                        left={() => <MaterialIcon name="percent" size={22} style={{marginRight: 10}} />}
                    >
                        <View style={{backgroundColor: 'white', alignItems: 'flex-start', paddingLeft: 0}}>
                            <View style={{backgroundColor: 'white', width: '100%', paddingHorizontal: 20, rowGap: 10, paddingVertical: 10}}>
                                <TextInput placeholder="Código do cupom" value={cupom} onChangeText={setCupom} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10}}/>
                            </View>
                        </View>
                    </List.Accordion>
                </List.Section>
            </View>
            </ScrollView>
        
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