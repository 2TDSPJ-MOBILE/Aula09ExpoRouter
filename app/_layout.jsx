import { Tabs } from "expo-router";
import {Drawer} from "expo-router/drawer"

export default function Layout(){
    return(
        <Drawer>
            <Drawer.Screen name="index" options={{title:"Tela Inicial"}}/>
            <Drawer.Screen name="user" options={{title:"Tela Usuário"}}/>
            <Drawer.Screen name="produtos/[idProduto]" options={{title:"Tela de Produtos"}} />
        </Drawer>
    )
}