import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import colors from "react-native/Libraries/NewAppScreen/components/Colors";

const DartScorekeeper = () => {
    const [score1, setScore1] = useState(501);
    const [score2, setScore2] = useState(501);
    let [numberShots, setNumberShots] = useState(0);
    const [throws1, setThrows1] = useState([]);
    const [throws2, setThrows2] = useState([]);
    let player1Name = "Mathieu";
    let player2Name = "Maxime";
    let [actualPlayer, setActualPlayer] = useState(1);



    const updateScore = (shot) => {
        if (actualPlayer === 1) {
            setScore1(score1 - shot);
            setThrows1([...throws1, shot]);
        }
        else {
            setScore2(score2 - shot);
            setThrows2([...throws2, shot]);
        }
    }
    const addThrow = (points) => {
      Alert.alert(  
        'Select multiplier',  
        '',  
        [  
          {  
              text: 'x1',  
              onPress: () => {updateTurn(points, 1)},  
          }, 
          {  
            text: 'x2',  
            onPress: () => {updateTurn(points, 2)},  
          },  
          {  
            text: 'x3',  
            onPress: () => {updateTurn(points, 3)},  
          },   
          ]  
      );  
    }

    const updateTurn = (points, multiplier) => {
        let thisScore 
        if(points != 25 && points != 50){
            thisScore = points * multiplier;
        }
        else {
            thisScore = points;
        }
        shotCounter();
        updateScore(thisScore);
        changePlayer();

    }
    const shotCounter = () => {
        setNumberShots(numberShots + 1);
    }
    const changePlayer = () => {
        if(numberShots === 2){
            setNumberShots(0);
            if(actualPlayer=== 1){
                setActualPlayer(2);
            }else{
                setActualPlayer(1);
            }
        }
    }
    const reset = () => {
        setScore1(501);
        setScore2(501);
        setThrows1([]);
        setThrows2([]);
        setNumberShots(0);
        setActualPlayer(1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.playerContainer}>
            <View style={styles.playerContainer1}>
                <Text style={styles.text}>{player1Name}</Text>
                <Text style={styles.score}>{score1}</Text>
                <Text style={styles.text}>Throws: {throws1.join(', ')}</Text>
            </View>
            <View style={styles.playerContainer2}>
                <Text style={styles.text}>{player2Name}</Text>
                <Text style={styles.score}>{score2}</Text>
                <Text style={styles.text}>Throws: {throws2.join(', ')}</Text>
            </View>
            </View>
            <Text>C'est au tour du Joueur :</Text>
            <Text style={styles.text}>{actualPlayer}</Text>



            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(1)}>
                    <Text style={styles.buttonTextInvert}>1</Text>
                </TouchableOpacity>              
                <TouchableOpacity style={styles.button} onPress={() => addThrow(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(3)}>
                    <Text style={styles.buttonTextInvert}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(4)}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(5)}>
                    <Text style={styles.buttonTextInvert}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(6)}>
                    <Text style={styles.buttonTextInvert}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(7)}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(8)}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(9)}>
                    <Text style={styles.buttonTextInvert}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(10)}>
                    <Text style={styles.buttonText}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(11)}>
                    <Text style={styles.buttonTextInvert}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(12)}>
                    <Text style={styles.buttonText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(13)}>
                    <Text style={styles.buttonText}>13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(14)}>
                    <Text style={styles.buttonText}>14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(15)}>
                    <Text style={styles.buttonTextInvert}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(16)}>
                    <Text style={styles.buttonTextInvert}>16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(17)}>
                    <Text style={styles.buttonTextInvert}>17</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(18)}>
                    <Text style={styles.buttonText}>18</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlanc} onPress={() => addThrow(19)}>
                    <Text style={styles.buttonTextInvert}>19</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addThrow(20)}>
                    <Text style={styles.buttonText}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonVert} onPress={() => addThrow(25)}>
                    <Text style={styles.buttonText}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRouge} onPress={() => addThrow(50)}>
                    <Text style={styles.buttonText}>50</Text>
                </TouchableOpacity>

            </View>


            <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginBottom: 30,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,

    },
    score: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonRouge: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    buttonVert: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    buttonBlanc: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    buttonTextInvert: {
        color: 'black',
        fontSize: 20,
    },
    resetButton: {
        marginTop: 20,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
    },
});

export default DartScorekeeper;
