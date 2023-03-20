import { Text, View, StyleSheet } from "react-native";
import LogosSvg from "../Svg/LogosSvg";

export default function FooterSection() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerTop}>
                <Text style={styles.textFooterTop}>TECH E DEV</Text>
                <View style={styles.bannerFooterTop}>
                    <LogosSvg />
                </View>
            </View>
            <View style={{marginTop: 20, marginHorizontal: 15}}>
                <Text style={{textAlign: 'center', lineHeight: 25, color: '#A8A8A8'}}>
                    Copyright ©2020 TODOS OS DIREITOS RESERVADOS. 
                    Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, dizeres, 
                    som, software, conjunto imagem, layout, aqui veiculados são de propriedade exclusiva da VELTY. 
                    É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. 
                    A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.{"\n"} 
                    WGM TECNOLOGIA DO BRASIL LTDA - CNPJ: 11.976.873/0001-50 - Avenida Miguel Castro, 600, Natal/RN - 84 3082-1757
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 70,
        flex: 1,
    },
    footerTop: {
        height: 60,
        backgroundColor: '#131313',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    textFooterTop: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    bannerFooterTop: {
        width: 87,
        height: 27
    }
  })