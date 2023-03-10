import {StyleSheet} from 'react-native';

export const gameStyles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginTop: -90,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goldenCarrotContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
    },
    arrayThrows: {
        fontSize: 10,
    },
    text: {
        fontSize: 20,
    },
    goldenCarrot: {
        opacity: 0.0,
        fontSize: 20,
    },
    marginBottom: {
        marginBottom: 30,
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
