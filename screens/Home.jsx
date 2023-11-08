import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // for content should be on screen
import styles from "./home.style";

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

// const styles = StyleSheet.create({});
//going to make seprate style file for all screens
