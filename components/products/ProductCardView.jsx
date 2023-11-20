import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const  ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1529113241001-b495badd8d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGx1eHVyeSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>Interior</Text>
          <Text style={styles.supplier}>Golden CHains</Text>
          <Text style={styles.price}>$799.99</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={() => {}}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
