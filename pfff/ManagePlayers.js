import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
import {profileStyles} from "./styles/ProfilesStylesheet";
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
          return <TouchableOpacity key={"btn-" + player} style={profileStyles.overviewProfile} onPress={() => navigation.navigate('Profile', {playerName: player})}><Text key={player} style={[styles.textMedium, styles.textWhite]}>{player}</Text></TouchableOpacity>;
        })}
      </View>
      <TouchableOpacity style={[styles.buttonPrimary, styles.marginTop]} onPress={() => navigation.navigate('AddPlayer')}>
          <Text style={[styles.textBig, styles.textWhite]}>New Player</Text>
      </TouchableOpacity>
    </View>
    );
  }

export default ManagePlayers;
