import React from "react";
import { Text,Image,StyleSheet,View } from "react-native";

import Topo  from "../Cesta/Componentes/Topo"
import Detalhes from "../Cesta/Componentes/Detalhes";


export default function Cesta(){
    return<>
    <Topo />
    <View style={estilos.cesta}>
<Detalhes />
    </View>
    </>
}
const estilos = StyleSheet.create({
cesta:{
    paddingVertical:8,
    paddingHorizontal:16,
},
})