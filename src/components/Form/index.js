import React, {useState} from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

import {Result} from "../result";
import getCotacao from "../../../service/api";


export default function Form(){
    //Seção da logica
    const [real, setReal] = useState(null);
    const [msg, setMsg] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [cotacao, setCotacao] = useState(null);

    //Funcao que é chamada pelo botão da tela
    function validar(){


        if(real != null ){

            console.log("Converter")

            converter()
            setReal(null)

        }else{
            setMsg("Informe um valor a ser convertido")
            setResultado(null)
        }

    }

    async function converter() {
        console.log("antes da cotação")
        const aux = await getCotacao()
        console.log("depois da cotação")

        setCotacao(aux[0])
        setMsg(aux[1])


        console.log("Formulario")
        console.log(cotacao)
        console.log(msg)
        
        
        return setResultado((real/cotacao).toFixed(2))
    }


    //Seção da montagem da tela
    return(

        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Real</Text>
                <TextInput 
                    style={styles.TextInput}
                    keyboardType="numeric"
                    value={real}
                    onChangeText={setReal}
                    placeholder="Ex: 6.00"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { validar() }}
                >
                    <Text style={styles.textButton}>Converter para U$</Text>
                </TouchableOpacity>

            </View>
            
            <Result cotacao={cotacao} msg={msg} valor={resultado}/>

        </View>
    );
}