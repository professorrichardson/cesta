/* link como usar fonts no expo : https://docs.expo.dev/develop/user-interface/fonts/#use-google-fonts */

import React from "react";
import { Text,Image, Dimensions,StyleSheet,View } from "react-native";
import Texto from "../componentes/Texto";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

//const width1= Dimensions.get('screen').width;


export default function Cesta(){
    return<>
        <Image source={topo} style={estilos.topo} />

        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
       
   <View style={estilos.cesta}>
       <Texto style={estilos.nome}>Cesta de verduras</Texto> 
        <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagenFazenda}/>
        <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
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
topo:{
    width:"100%",
    //height: 578 / 768 * width1
},
titulo:{
    width:"100%",
    position:"absolute",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"white",
    fontWeight:"bold",
    padding: 16,
},
cesta:{
    paddingVertical:8,
    paddingHorizontal:16,
},
nome:{
    color:"#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight:'bold'
   
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