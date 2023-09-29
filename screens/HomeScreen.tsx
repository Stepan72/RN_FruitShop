import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { categories } from "../constants";
import { Category } from "../types";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<Category>("Oranges");

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* top bar */}
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity className="p-2 rounded-xl bg-orange-100">
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
          className="mt-8 px-5"
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
    </SafeAreaView>
  );
}
