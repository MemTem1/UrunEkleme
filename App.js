import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './contrex/BlogContext';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Front.Div" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="oluştur" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({

});
