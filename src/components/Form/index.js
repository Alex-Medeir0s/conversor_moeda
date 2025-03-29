import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

import {Result} from "../result";
import {getCotacao} from "../../../services/api";


export default function Form() {
    //secao da logica
    const [real, setReal] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [msg, setMsg] = useState("");
    const [cotacao, setCotacao] = useState(null);

    //funcao que e chamada pelo botao da tela
    function validar() {

        if(real!=null){
            converter()
            setReal(null)
        }else{
            setMsg("Informe um valor para conversão")
            setResultado(null)
        }

    }

    //funcao que faz a chamada da API e converte o valor
    async function converter() {
        const aux = await getCotacao()

        setCotacao(aux[0])
        setMsg(aux[1])

        return setResultado((real/cotacao).toFixed(2))

    }


//secao da montagem da tela
    return(

        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>
                    Real
                </Text>
                <TextInput
                    style={styles.TextInput}
                    keyboardType="numeric"
                    value={real}
                    onChangeText={setReal}
                    placeholder="Ex: 6.00"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {validar()}}
                >
                    <Text style={styles.textButton}>
                        Converter para Dólar
                    </Text>
                </TouchableOpacity>
                <Result msg={msg} valor={resultado}/>

        </View>
        </View>
    )

}