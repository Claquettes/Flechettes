import {View, Text, TouchableOpacity} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {styles} from "./styles/MainStylesheet";
const ManagePlayers = ({navigation}) => {

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('players', jsonValue)
        } catch (e) {
          // saving error
        }
    }

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('players')
          console.log(await jsonValue); 
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }
    
      let obj = {  
        name: 'Michal',  
        email: 'michal@gmail.com',  
        city: 'New York',  
      }

      storeData(obj);
      console.log(getData())
    
    return (
        <View style={styles.containerMain}>
            <Text style={styles.text}>Mathieu</Text>
            <Text style={styles.text}>Maxime</Text>
        </View>
    );
}

export default ManagePlayers;
