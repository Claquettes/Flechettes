import React, {useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import Test from './functions/Test';
import {gameStyles} from "./styles/GameStylesheet";


//ces fonctions devraient être dans un fichier à part, mais je n'ai pas réussi à les importer

function three01(score1, score2) { //on définit les scores de départ, puis on renvoie vers la page de jeu
    score1 = 301;
    score2 = 301;
}

function five01(score1, score2) {
    score1 = 501;
    score2 = 501;
}

function seven01(score1, score2) {
    score1 = 701;
    score2 = 701;
}
    
const Game = ({route, navigation}) => {
    let gamemode = route.params['gamemode'];

    let defaultScore;
    if(gamemode === '301') {
       defaultScore = 301;
    }
    else if(gamemode === '701') {
        defaultScore = 701;
    } 
    else {
        defaultScore = 501;
    }
    
    const [score1, setScore1] = useState(defaultScore);
    const [score2, setScore2] = useState(defaultScore);

    let [numberShots, setNumberShots] = useState(0);

    const [throws1, setThrows1] = useState([]);
    const [throws2, setThrows2] = useState([]);

    let players = ["Mathieu", "Maxime"];
    let [actualPlayer, setActualPlayer] = useState(0);

    const updateScore = (shot) => {
        if (actualPlayer === 0) {
            setScore1(score1 - shot);
            setThrows1([...throws1, shot]);
        } else {
            setScore2(score2 - shot);
            setThrows2([...throws2, shot]);
        }
    }

    const addThrow = (points) => {
        if (points != 0 && points != 25 && points != 50) {
            Alert.alert(
                points.toString(),
                'Select multiplier',
                [
                    {
                        text: 'x1',
                        onPress: () => {
                            updateTurn(points, 1)
                        },
                    },
                    {
                        text: 'x2',
                        onPress: () => {
                            updateTurn(points, 2)
                        },
                    },
                    {
                        text: 'x3',
                        onPress: () => {
                            updateTurn(points, 3)
                        },
                    },
                ]
            );
        } else {
            updateTurn(points, 1);
        }
    }

    const updateTurn = (points, multiplier) => {
        let thisScore;
        // thisScore = Test.test(points) * multiplier;

        switch (gamemode) {
            case '301' :
                // fonction du 301
                break;
            case '501' :
                // fonction du 501
                break;
            case '701' :
                // fonction du 701
                break;
            case '501-rumble' :
                // fonction du 501 rumble
                break;
            case 'killer' :
                // fonction du killer
                break;
        }

        thisScore = points * multiplier;
        shotCounter();
        updateScore(thisScore);
        changePlayer();
    }

    const shotCounter = () => {
        setNumberShots(numberShots + 1);
    }
    const changePlayer = () => {
        if (numberShots === 2) {
            setNumberShots(0);
            if (actualPlayer === 0) {
                setActualPlayer(1);
            } else {
                setActualPlayer(0);
            }
        }
    }
    const reset = () => {
        setScore1(defaultScore);
        setScore2(defaultScore);
        setThrows1([]);
        setThrows2([]);
        setNumberShots(0);
        setActualPlayer(0);
    }

    return (
        <View style={gameStyles.container}>
            <View style={gameStyles.playerContainer}>
                <View style={gameStyles.playerContainer1}>
                    <Text style={gameStyles.text}>{players[0]}</Text>
                    <Text style={gameStyles.score}>{score1}</Text>
                    <Text style={gameStyles.arrayThrows}>{throws1.join(', ')}</Text>
                </View>
                <View style={gameStyles.playerContainer2}>
                    <Text style={gameStyles.text}>{players[1]}</Text>
                    <Text style={gameStyles.score}>{score2}</Text>
                    <Text style={gameStyles.arrayThrows}>{throws2.join(', ')}</Text>
                </View>
            </View>
            <Text>C'est au tour du Joueur :</Text>
            <Text style={[gameStyles.text, gameStyles.marginBottom]}>{players[actualPlayer]}</Text>

            <View style={gameStyles.buttonContainer}>

                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(1)}>
                    <Text style={gameStyles.buttonTextInvert}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(2)}>
                    <Text style={gameStyles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(3)}>
                    <Text style={gameStyles.buttonTextInvert}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(4)}>
                    <Text style={gameStyles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(5)}>
                    <Text style={gameStyles.buttonTextInvert}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(6)}>
                    <Text style={gameStyles.buttonTextInvert}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(7)}>
                    <Text style={gameStyles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(8)}>
                    <Text style={gameStyles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(9)}>
                    <Text style={gameStyles.buttonTextInvert}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(10)}>
                    <Text style={gameStyles.buttonText}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(11)}>
                    <Text style={gameStyles.buttonTextInvert}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(12)}>
                    <Text style={gameStyles.buttonText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(13)}>
                    <Text style={gameStyles.buttonText}>13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(14)}>
                    <Text style={gameStyles.buttonText}>14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(15)}>
                    <Text style={gameStyles.buttonTextInvert}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(16)}>
                    <Text style={gameStyles.buttonTextInvert}>16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(17)}>
                    <Text style={gameStyles.buttonTextInvert}>17</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(18)}>
                    <Text style={gameStyles.buttonText}>18</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(19)}>
                    <Text style={gameStyles.buttonTextInvert}>19</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.button} onPress={() => addThrow(20)}>
                    <Text style={gameStyles.buttonText}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonBlanc} onPress={() => addThrow(0)}>
                    <Text style={gameStyles.buttonTextInvert}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonVert} onPress={() => addThrow(25)}>
                    <Text style={gameStyles.buttonText}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={gameStyles.buttonRouge} onPress={() => addThrow(50)}>
                    <Text style={gameStyles.buttonText}>50</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={gameStyles.resetButton} onPress={reset}>
                <Text style={gameStyles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Game;
