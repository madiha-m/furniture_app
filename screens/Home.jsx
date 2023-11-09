import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // for content should be on screen
import styles from "./home.style";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text /* style={styles.textStyle} */>Home</Text>
          <Text /* style={styles.textStyle} */>Next</Text>
        </View>
        <View style={styles.appBar2}>
          <Text /* style={styles.textStyle} */>Home</Text>
          <Text /* style={styles.textStyle} */>Next</Text>
        </View>
        <View style={styles.appBar3}>
          <Text /* style={styles.textStyle} */>Home</Text>
          <Text /* style={styles.textStyle} */>Next</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// const styles = StyleSheet.create({});
//going to make seprate style file for all screens
