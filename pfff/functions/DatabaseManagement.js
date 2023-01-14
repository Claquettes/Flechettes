import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('data', jsonValue)
        
    } catch (e) {
        console.log(e)
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('data');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e)
    }
}

export const displayData = async () => {
    console.log(await getData());
}

export const eraseData = async () => {
    storeData([]);
}