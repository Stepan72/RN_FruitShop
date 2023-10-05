import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { SafeAreaView } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import StarRating from "react-native-star-rating";

type ProductScreenProps = NativeStackScreenProps<StackParamList, "Product">;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
  const { name, price, stars, desc, shadow, image, color } = route.params;

  return (
    <View className="flex-1" style={{ backgroundColor: color(1) }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5">
          <TouchableOpacity
            className="border border-gray-50 rounded-xl"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ChevronLeftIcon size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center mt-5 pb-10"
          style={{
            shadowColor: shadow,
            shadowRadius: 50,
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.7,
          }}
        >
          <Image source={image} style={{ width: 290, height: 290 }} />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className="flex-1 bg-orange-50 px-6 space-y-1"
      >
        <Text
          style={{ color: themeColors.text }}
          className="mt-6 text-2xl font-bold"
        >
          {name}
        </Text>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-500 font-semibold">{desc}</Text>
          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-600 font-extrabold">239</Text>
          </Text>
        </View>
        <StarRating
          disabled={true}
          starSize={18}
          containerStyle={{ width: 120 }}
          maxStars={5}
          rating={stars}
          emptyStarColor="lightgray"
          fullStar={require("../assets/images/fullStar.png")}
        />
        <View style={{ height: 165 }}>
          <Text
            style={{ color: themeColors.text }}
            className="py-3 tracking-wider"
          >
            Lorem Ipsum is simply dummy text of the print and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a bad galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic wisa
            typesetting.
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-3xl">$ {price}</Text>
          <TouchableOpacity
            className="text-3xl p-3 ml-6 flex-1 rounded-xl"
            style={{
              backgroundColor: shadow,
              opacity: 0.5,
              shadowColor: shadow,
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.5,
            }}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Text className="text-xl text-center text-white font-bold">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
