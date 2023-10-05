import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { categories, featuredFruits } from "../constants";
import { Category } from "../types";
import { FruitCard, FruitCardSales } from "../components";
import { StackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Oranges");

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* top bar */}
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity
          className="p-2 rounded-xl bg-orange-100"
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <ShoppingCartIcon scale="25" color="orange" />
        </TouchableOpacity>
      </View>
      {/* categories */}
      <View className="mt-4">
        <Text
          style={{ color: themeColors.text }}
          className="text-2xl tracking-widest font-medium ml-5"
        >
          Seasonal
        </Text>
        <Text
          style={{ color: themeColors.text }}
          className="text-3xl tracking-widest font-semibold ml-5"
        >
          Fruits and Vegetables
        </Text>
        <ScrollView
          horizontal
          className="mt-4 px-5"
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => {
            const isActive = category == activeCategory;

            return (
              <TouchableOpacity
                key={index}
                className="mr-8 relative"
                onPress={() => {
                  setActiveCategory(category);
                }}
              >
                <Text
                  className={`text-xl ${isActive ? "font-bold" : null}`}
                  style={{ color: themeColors.text }}
                >
                  {category}
                </Text>
                {isActive ? (
                  <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                    __ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* Fruits carousel */}
      <View className="mt-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => {
            return <FruitCard {...fruit} key={index} />;
          })}
        </ScrollView>
      </View>
      {/* Hot sale */}
      <View className="mt-4 pl-5 space-y-1">
        <Text className="text-xl font-bold" style={{ color: themeColors.text }}>
          Hot Sale
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "visible" }}
        >
          {[...featuredFruits].reverse().map((fruit, index) => {
            return <FruitCardSales {...fruit} key={index} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
