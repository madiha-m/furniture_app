import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView>
      {/* content should be on screen, not out of range */}
      <View style={styles.appBarWrapper}>
        {/* Set position of content on XY-sxis */}
        <View style={styles.appBar}>
          {/* Set AppBar contents (Text, icons etc formating e.g. alignment, direction) */}
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Home</Text>

          {/* Cart icon + number on cart */}
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>3</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// const styles = StyleSheet.create({});
//going to make seprate style file for all screens
