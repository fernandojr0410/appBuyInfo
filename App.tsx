import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useTheme } from "react-native-paper";
import { Login } from "./src/pages/login/login";
import { Products } from "./src/pages/products/products";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home">
            {() => (
              <Tab.Navigator initialRouteName={"products"}>
                <Tab.Screen
                  name="products"
                  component={Products}
                  options={{ title: "Produtos", tabBarIcon: "cog" }}
                />
                {/* <Tab.Screen name="Settings" component={Settings} options={{ title: 'Configurações', tabBarIcon: 'cog' }} /> */}
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
