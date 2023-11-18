import { View, Text, FlatList } from "react-native";
import React from "react";

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5];
  return (
    <View>
      <FlatList data={products} 
      renderItem={({item})=>(<Text>Product</Text>)}/>
    </View>
  );
};

export default ProductRow;
