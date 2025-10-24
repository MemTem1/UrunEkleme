import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { BlogProvider } from './contrex/BlogContext';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "memo uygulamsı" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="oluştur" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </BlogProvider>
  );
}

const styles = StyleSheet.create({

});
