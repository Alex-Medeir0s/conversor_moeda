import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';

export function Result(props) {
    return (
        <View>
            <Text style={styles.formValor}>
                Cotação: {props.cotacao}
            </Text>
            <Text style={styles.formLabel}>
                Moeda: {props.msg}
            </Text>
            <Text style={styles.formValor}>
                Resultado: {props.valor}
            </Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {},
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formValor: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 20,
    },
});