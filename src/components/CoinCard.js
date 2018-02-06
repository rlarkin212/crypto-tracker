import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CoinCard = () =>{
    return(
        <View>
            <Text>{props.symbol}</Text>
            <Text>{props.price_usd}</Text>
            <Text>{props.precent_change_24h}</Text>
        </View>
    )
}

export default CoinCard;