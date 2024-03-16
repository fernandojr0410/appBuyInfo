import { SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useTheme } from 'react-native-paper';
import { Login } from './src/pages/login/login';
import { Products } from './src/pages/products/products';
import { BottomTabs } from './src/components/bottomTabs/bottomTabs';

const Stack = createNativeStackNavigator()

export default function App() {
  const theme = useTheme()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='login'
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="products" component={Products} />
          <Stack.Screen name="home">{() => <BottomTabs/>}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
