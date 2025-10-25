import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './contrex/BlogContext';
import NewShowScreen from './screens/NewShowScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import EditScreen from './screens/EditScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Front.Div" }}>
          <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('oluştur') }}>

                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="oluştur" component={CreateScreen} />

          <Stack.Screen name="ShowScreen" component={NewShowScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('EditScreen') }}>

                  <FontAwesome name="pencil-square-o" size={24} color="black" />
                </TouchableOpacity>
              )
            })} />
          <Stack.Screen name="EditScreen" component={EditScreen} />

        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({

});
