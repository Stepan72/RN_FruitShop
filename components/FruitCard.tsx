import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { FruitCardProps } from "../types";

export default function FruitCard({
  name,
  price,
  stars,
  desc,
  shadow,
  image,
  color,
}: FruitCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View
      style={{ width: 270, borderRadius: 40, backgroundColor: color(1) }}
      className="mx-5"
    >
      <View className="flex-row justify-end">
        <TouchableOpacity
          onPress={() => {
            setIsFavorite((prevValue) => !prevValue);
          }}
          className="p-3 rounded-full mr-4 mt-4"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <HeartIcon size="25" color={isFavorite ? shadow : "white"} />
        </TouchableOpacity>
      </View>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: shadow,
          shadowRadius: 40,
          shadowOpacity: 0.6,
          shadowOffset: { width: 0, height: 40 },
        }}
      >
        <Image source={image} style={{ width: 210, height: 210 }} />
      </View>
      <View className="ml-4 my-4">
        <Text className="font-bold text-xl text-white shadow ">{name}</Text>
        <Text className="font-bold text-lg text-white shadow tracking-wide">
          $ {price}
        </Text>
      </View>
    </View>
  );
}
