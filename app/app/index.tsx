
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade'
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
  
  export default function App() {
    return (
      <SafeAreaProvider style={styles.container}>
      <Toaster />
          <RootStack />
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
