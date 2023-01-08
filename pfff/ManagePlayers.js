import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from "./styles/MainStylesheet";

const ManagePlayers = ({navigation}) => {
    
    return (
        <View style={styles.containerMain}>
            <Text style={styles.text}>Mathieu</Text>
            <Text style={styles.text}>Maxime</Text>
        </View>
    );
}

export default ManagePlayers;
