import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

import {Result} from "../result";
import {getCotacao} from "../../../services/api";


export default function Form() {

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