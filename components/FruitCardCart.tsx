import { View, Text, Image } from "react-native";
import React from "react";
import { CartItemProps } from "../types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { themeColors } from "../theme";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

type Props = NativeStackScreenProps<StackParamList, "Cart">;

type CartNavigationProp = Props["navigation"];

export default function FruitCardCart({
  name,
  price,
  qty,
  desc,
  shadow,
  image,
  color,
}: CartItemProps) {
  const navigation = useNavigation<CartNavigationProp>();

  return (
    <View className="flex-row justify-between items-center space-x-5 mb-5">
      <View className="ml-7">
        <TouchableOpacity className="flex-row -mb-10 -ml-8 shadow-lg z-20">
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
          style={{ backgroundColor: color(0.4), height: 60, width: 60 }}
          className="rounded-3xl flex justify-end items-center"
        ></View>
      </View>
      <View className="flex-1 space-y-1">
        <Text
          style={{ color: themeColors.text }}
          className="text-base font-bold"
        >
          {name}
        </Text>
        <Text className="text-yellow-500 font-extrabold">$ {price}</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="bg-gray-300 rounded-xl p-1">
          <PlusIcon size={20} color="white" />
        </TouchableOpacity>
        <Text>{qty}</Text>
        <TouchableOpacity className="bg-gray-300 rounded-xl p-1">
          <MinusIcon size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
