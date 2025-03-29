import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
    return(
        <view style={styles.boxTitle}>
            <Text style={styles.textTitle}>
            Conversor Moeda v1.0
            </Text>
        </view>
    )
}