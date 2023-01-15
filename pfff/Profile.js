import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
import {profileStyles} from "./styles/ProfilesStylesheet";
import {storeData, getData, displayData, eraseData} from "./functions/DatabaseManagement";

const Profile = ({route, navigation}) => {
  let playerName = route.params['playerName'];
  const [playerData, setPlayerData] = useState([]);

  const getPlayerData = async () => {
    let data = await getData();
    for (let i = 0; i < data.length; i++) {
      if(data[i].name === playerName) {
        setPlayerData(data[i]);
        return;
      }
    }
  }

  const calculateWinRatio = (gamesWon, gamesPlayed) => {
    if(gamesPlayed === 0) {
      return 0;
    }
    return Math.round((gamesWon/gamesPlayed) * 100);
  }

  renderPlayerData = () => {
    getPlayerData();
    return (
      <View>
        <Text style={[styles.text, styles.textBig, styles.marginBottom]}>{playerName}</Text>
        <Text style={[styles.text, styles.marginBottomSmall]}>Highest throw: {playerData.highestScore}</Text>
        <Text style={[styles.text, styles.marginBottom]}>Average throw: {playerData.averageScore}</Text>
        <Text style={[styles.text, styles.marginBottomSmall]}>Games Played: {playerData.gamesPlayed}</Text>
        <Text style={[styles.text, styles.marginBottomSmall]}>Games Won: {playerData.gamesWon}</Text>
        <Text style={[styles.text, styles.marginBottomSmall]}>Win Ratio: {calculateWinRatio(playerData.gamesWon, playerData.gamesPlayed)} %</Text>
      </View>
    );

  }

  return (
    <View style={styles.containerMain}>
      {renderPlayerData()}
    </View>
    );
  }

export default Profile;
