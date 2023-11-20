import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Cart, ProductDetails } from "./screens";
// import { StatusBar, Text, View } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() { 
  const [fontsLoaded] = useFonts({
    iconicon: require("@expo/vector-icons"),
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    light: require("./assets/fonts/Montserrat-Light.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    xBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      console.log(fontsLoaded + " test 1");
    }
  }, [/* fontsLoaded */]);

  if (!fontsLoaded) {
    console.log(fontsLoaded + " test not 2");
    // return null;
  }

  return (
    <NavigationContainer /* onLayoutRootView={onLayoutRootView} */>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
