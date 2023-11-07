import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   // regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  //   // light: require("./assets,/fonts/Montserrat-Light.ttf"),
  //   // medium: require("./assets/fonts/Montserrat-Medium.ttf"),
  //   // bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  //   // xBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  //   // semiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <Text style={styles.regularTextStyle}>
    //     Oto start working on your app!
    //   </Text>
    //   <Text style={styles.xBoldTextStyle}>Oto start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   regularTextStyle: {
//     // fontFamily: "regular", custom fonts not working
//     fontWeight: "regular",
//     fontSize: 20,
//   },
//   xBoldTextStyle: {
//     fontWeight: "condensedBold",
//     fontSize: 20,
//   },
// });
