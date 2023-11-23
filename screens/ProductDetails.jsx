import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants";
import { Image } from "react-native";
import { Text } from "react-native";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let colorsArray = ["tomato", "cornflowerblue", "orange", "lime", "black"];
  return (
    <View style={styles.container}>
      {/* Upper Row */}
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={{
          uri: "https://media.gettyimages.com/id/1394286634/photo/rooftop-lounge.jpg?s=2048x2048&w=gi&k=20&c=UgAU5hro9O0nRC7KwlFETR7BK11jrdwQ7Ke1eLeW_uU=",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        {/* Title Row */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Roof Terrace Interior</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 999.99</Text>
          </View>
        </View>

        {/* Rating Row */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name="star"
                size={SIZES.large}
                color={COLORS.gold}
              />
            ))}
            <View style={styles.ratingTextWrapper(7)}>
              <Text style={styles.ratingText}>(4.9)</Text>
            </View>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <View style={styles.ratingTextWrapper(0)}>
              <Text style={styles.ratingText}>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descWrapper}>
          <Text style={styles.descHeading}>Description</Text>
          <Text style={styles.descText}>
            loremlpsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        {/* Delivery Row */}
        <View style={styles.deliveryRow}>
          <View style={styles.locationWrapper}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <View style={styles.locationTextWrapper}>
                <Text style={styles.locationText}>Dallas</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <View style={styles.locationTextWrapper}>
                <Text style={styles.locationText}>Free Delivery</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Circle Style Row */}
        <View style={styles.circlRow}>
          <View style={styles.circle}>
            {colorsArray.map((color, index) => (
              <Ionicons
                key={index}
                name="ellipse"
                size={25}
                color={color}
                style={{ marginEnd: SIZES.medium }}
              />
            ))}
          </View>
        </View>

        {/* Cart Row */}
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn} onPress={() => {}}>
            <Text style={styles.cartBtnText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIconBtn} onPress={() => {}}>
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
