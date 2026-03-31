import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";

import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png"

export default function Detalhes({nome,logo,nomeFazenda,descricao,preco}){
    return<>

    <Texto style={estilos.nome}>{nome}</Texto> 
            <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagenFazenda}/>
    
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
            </View>
    
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
</>
}

const estilos = StyleSheet.create({
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
});