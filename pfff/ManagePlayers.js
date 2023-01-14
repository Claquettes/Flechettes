import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
import {storeData, getData, displayData, eraseData} from "./functions/DatabaseManagement";

const ManagePlayers = ({navigation}) => {

  const [players, setPlayers] = useState([]);
   
  const updatePlayers = async () => {
    let data = await getData();
    let players = [];
    for (let i = 0; i < data.length; i++) {
      players.push (data[i].name);
    }
    setPlayers(players);
  }

  updatePlayers();

  return (
    <View style={styles.containerMain}>
      <View>
        {players.map(function(player){
          return <Text key={player} style={[styles.text, styles.marginBottom]}>{player}</Text>;
        })}
      </View>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('AddPlayer')}>
          <Text style={[styles.textBig, styles.textWhite]}>New Player</Text>
      </TouchableOpacity>
    </View>
    );
  }

export default ManagePlayers;
