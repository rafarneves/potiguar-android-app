import { SafeAreaView, Text, TextInput, TouchableHighlight, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { List } from "react-native-paper";
import { useState } from "react";

export default function FinalizacaoScreen() {

    const [codigo, setCodigo] = useState('')
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
            <View style={{flex: 1, paddingVertical: 15, paddingHorizontal: 15}}>
                <View style={{alignItems: 'center', marginTop: 20, marginBottom: 18}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>RECEBEMOS O SEU PEDIDO</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#878787'}}>Seu pedido foi recebido com sucesso. Em breve você receberá atualizações sobre o seu andamento. {"\n"}Utilize as informações abaixo para realizar o pagamento do seu pedido.</Text>
                </View>
                <View style={{height: 205, backgroundColor: 'white', marginTop: 18, paddingHorizontal: 22, paddingVertical: 20}}>
                    <View style={{marginBottom: 20}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>PAGAR COM PIX</Text>
                    </View>
                    <View style={{rowGap: 10, width: '100%'}}>
                        <Text style={{color: '#878787', fontSize: 16}}>Use o código abaixo na opção PIX Copia e Cola do seu banco</Text>
                        <View style={{width: '100%', flexDirection: 'row', columnGap: 10}}>
                            <TextInput placeholder="3638764238426832848…" value={codigo} onChangeText={setCodigo} style={{borderWidth: 1, borderColor: '#EAEAEA', height: 50, borderRadius: 10, paddingHorizontal: 10, width: '60%'}}/>
                            <TouchableHighlight style={{backgroundColor: 'red', width: '35%', borderRadius: 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>Copiar código</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}