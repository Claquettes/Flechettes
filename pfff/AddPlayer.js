import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
import {profileStyles} from "./styles/ProfilesStylesheet";
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
        averageScore: 0,  
        gamesPlayed: 0,
        gamesWon : 0,
        throws: [],
      }

      data.push(obj);
      storeData(data);
      navigation.navigate('ManagePlayers');
    } else {
      alert("Please write a name");
    }
  }

  return (
    <View style={styles.containerMain}>
      <Text style={[styles.text, styles.textBig]}>Enter player's name</Text>
      <View style={{padding: 10}}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here"
        onChangeText={newText => setTextInput(newText)}
        defaultValue=''
      />
      </View>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => newPlayer(textInput)}>
          <Text style={[styles.textBig, styles.textWhite]}>Add Player</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddPlayer;
