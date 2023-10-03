import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { FruitCardProps } from "../types";

export default function FruitCardSales({ fruit }: FruitCardProps) {
  return (
    <View className="mr-6">
      <TouchableOpacity className="flex-row justify-center -mb-9 shadow-lg z-20">
        <Image
          source={fruit.image}
          style={{
            width: 65,
            height: 65,
            shadowColor: fruit.shadow,
            overflow: "visible",
            shadowRadius: 15,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.4,
          }}
        />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: fruit.color(0.4), height: 75, width: 80 }}
        className="rounded-3xl flex justify-end items-center"
      >
        <Text className="font-semibold text-center text-gray-800 pb-3 tracking-wide">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
}
