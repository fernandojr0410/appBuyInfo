import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
import { Login } from "./src/pages/login/login";
import { Products } from "./src/pages/products/products";
import { BottomTabs } from "./src/components/bottomTabs/bottomTabs";
import { SelectProducts } from "./src/pages/selectProducts/selectProducts";
import { InsertProducts } from "./src/pages/insertProducts/insertProducts";
import { UpdateProducts } from "./src/pages/updateProducts/updateProducts";
import { DeleteProducts } from "./src/pages/deleteProducts/deleteProducts";

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="products" component={Products} />
          <Stack.Screen name="selectProducts" component={SelectProducts} />
          <Stack.Screen name="insertProducts" component={InsertProducts} />
          <Stack.Screen name="updateProducts" component={UpdateProducts} />
          <Stack.Screen name="deleteProducts" component={DeleteProducts} />
          <Stack.Screen name="home" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
