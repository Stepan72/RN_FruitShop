import {
  View,
  Text,
  ColorValue,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";

interface FruitCardProps {
  fruit: {
    name: string;
    price: string;
    stars: number;
    desc: string;
    shadow: string;
    image: ImageSourcePropType;
    color: (opacity: number) => ColorValue;
  };
}

export default function FruitCard({ fruit }: FruitCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View
      style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
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
          <HeartIcon size="25" color={isFavorite ? fruit.shadow : "white"} />
        </TouchableOpacity>
      </View>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shadow,
          shadowRadius: 40,
          shadowOpacity: 0.6,
          shadowOffset: { width: 0, height: 40 },
        }}
      >
        <Image source={fruit.image} style={{ width: 210, height: 210 }} />
      </View>
      <View className="ml-4 my-4">
        <Text className="font-bold text-xl text-white shadow ">
          {fruit.name}
        </Text>
        <Text className="font-bold text-lg text-white shadow tracking-wide">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
}
