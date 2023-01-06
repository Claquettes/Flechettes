import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

const DartScorekeeper = () => {
    const [score, setScore] = useState(501);
    const [throws, setThrows] = useState([]);

    const addThrow = (points) => {
        Alert.prompt(
            'Enter multiplier',
            '',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: (multiplier) => {
                        setThrows([...throws, points * multiplier]);
                        setScore(score - points * multiplier);
                    },
                },
            ],
            'plain-text',
            '1',
        );
    }

    const reset = () => {
        setScore(501);
        setThrows([]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Score: {score}</Text>
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
            <Text style={styles.text}>Throws: {throws.join(', ')}</Text>
            <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
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
