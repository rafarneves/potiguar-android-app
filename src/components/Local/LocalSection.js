import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LocalSection() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let address = await Location.reverseGeocodeAsync(location.coords)
            setLocation(address);
        })();
    }, []);

    let local = 'Carregando..';
    if (errorMsg) {
        local = errorMsg;
    } else if (location) {
        local = JSON.stringify(location[0].subregion).split('"').join('');
    }
    
    return (
        <View style={{backgroundColor: 'white', height: 42, justifyContent: 'space-between', paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="location-sharp" color='#ED1C24' size={20} />
                <Text style={{marginLeft: 10}}>Você está em: <Text style={{fontWeight: 'bold'}}>{local}</Text></Text>
            </View>
            <Icon name="chevron-right" color='#ED1C24' size={20} />
        </View>
    )
}