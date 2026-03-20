import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function IdProduto(){
    const{idProduto,segNumero}= useLocalSearchParams()
    return(
        <SafeAreaView>
            <Text>ID DO PRODUTO:{idProduto}</Text>
            <Text>SEGUNDO NÚMERO:{segNumero}</Text>
        </SafeAreaView>
    )
}