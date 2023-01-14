import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
import {storeData, getData, displayData, eraseData} from "./functions/DatabaseManagement";
import ManagePlayers from "./ManagePlayers";

const AddPlayer = ({navigation}) => {

  const [players, setPlayers] = useState([]);
  const [textInput, setTextInput] = useState('');

    
  const newPlayer = async (playerName) => {
    if(playerName != '' && playerName != null) {

      let data = await getData();

      for (let i = 0; i < data.length; i++) {
        if(data[i].name == playerName) {
          alert("This player already exists");
          return;
        }
      }
      
      let obj = {  
        name: playerName,  
        highestScore: 0,  
        gamesPlayed: 0,
        gamesWon : 0,
      }

      data.push(obj);
      storeData(data);
    }
  }

  const addPlayerBtn = () => {
    newPlayer(textInput);
    navigation.navigate('ManagePlayers');
  }

  return (
    <View style={styles.containerMain}>
      <Text style={styles.text}>Enter player's name</Text>
      <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here"
        onChangeText={newText => setTextInput(newText)}
        defaultValue=''
      />
      </View>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => addPlayerBtn()}>
          <Text style={[styles.textBig, styles.textWhite]}>Add Player</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddPlayer;
