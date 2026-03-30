import React from "react";
import { Text,Image,StyleSheet,View } from "react-native";

import Topo from "./Componentes/Topo";
import Texto from "../componentes/Texto";

import logo from '../../assets/logo.png';

export default function Cesta(){
    return<>
    <Topo />
    
   <View style={estilos.cesta}>
       <Texto style={estilos.nome}>Cesta de verduras</Texto> 
        <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagenFazenda}/>

        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados
               cuidadosamente da fazenda direto para 
               sua cozinha.
        </Texto>
        <Texto style={estilos.preco}>R$: 40,00</Texto>
    </View>
    
    </>
}

const estilos = StyleSheet.create({
cesta:{
    paddingVertical:8,
    paddingHorizontal:16,
},
nome:{
    color:"#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight:"bold",
},
fazenda:{
    flexDirection:"row",
    paddingVertical: 12,
},
imagenFazenda:{
    width:32,
    height:32,
},
nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
},
descricao:{
    color:"#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
preco:{
    color:"#2A9F85",
    fontWeight:"bold",
    fontSize: 26,
    lineHeight:42,
    marginTop: 8,
}



})