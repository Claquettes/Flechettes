import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {styles} from "./styles/MainStylesheet";
import GameModes from "./GameModes";
import Game from "./Game";
import ManagePlayers from "./ManagePlayers";
import AddPlayer from "./AddPlayer";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage} options={{title: 'Home'}}/>
                <Stack.Screen name="GameModes" component={GameModes} />
                <Stack.Screen name="Game" component={Game} /> 
                <Stack.Screen name="ManagePlayers" component={ManagePlayers} options={{title: 'Manage Players'}}/> 
                <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}}/> 
                <Stack.Screen name="AddPlayer" component={AddPlayer} options={{title: 'New Player'}}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const HomePage = ({navigation}) => {
    
    return (
        <View style={styles.containerMain}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('ManagePlayers')}>
                <Text style={[styles.textBig, styles.textWhite]}>Manage Players</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('GameModes')}>
                <Text style={[styles.textBig, styles.textWhite]}>New Game</Text>
            </TouchableOpacity>
        </View>
    );
}