import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { FruitCardProps } from "../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";

type Props = NativeStackScreenProps<StackParamList, "Product">;
type ProductNavigationProp = Props["navigation"];

export default function FruitCardSales({
  name,
  price,
  stars,
  desc,
  shadow,
  image,
  color,
}: FruitCardProps) {
  const navigation = useNavigation<ProductNavigationProp>();

  return (
    <View className="mr-6">
      <TouchableOpacity
        className="flex-row justify-center -mb-9 shadow-lg z-20"
        onPress={() => {
          navigation.navigate("Product", {
            name,
            price,
            stars,
            desc,
            shadow,
            image,
            color,
          });
        }}
      >
        <Image
          source={image}
          style={{
            width: 65,
            height: 65,
            shadowColor: shadow,
            overflow: "visible",
            shadowRadius: 15,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.4,
          }}
        />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: color(0.4), height: 75, width: 80 }}
        className="rounded-3xl flex justify-end items-center"
      >
        <Text className="font-semibold text-center text-gray-800 pb-3 tracking-wide">
          $ {price}
        </Text>
      </View>
    </View>
  );
}
