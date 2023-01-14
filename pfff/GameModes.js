import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from "./styles/MainStylesheet";

const GameModes = ({navigation}) => {
    
    return (
        <View style={styles.containerMain}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game',{gamemode: '301'})}>
                <Text style={[styles.textBig, styles.textWhite]}>301</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game', {gamemode: '501'})}>
                <Text style={[styles.textBig, styles.textWhite]}>501 Classic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game', {gamemode: '501-sniper'})}>
                <Text style={[styles.textBig, styles.textWhite]}>501 Sniper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game', {gamemode: '501-party'})}>
                <Text style={[styles.textBig, styles.textWhite]}>501 PARTY !</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game', {gamemode: '701'})}>
                <Text style={[styles.textBig, styles.textWhite]}>701</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Game', {gamemode: 'killer'})}>
                <Text style={[styles.textBig, styles.textWhite]}>Killer</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GameModes;
