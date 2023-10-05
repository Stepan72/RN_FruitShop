import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { themeColors } from "../theme";
import { cartItems } from "../constants";
import { FruitCardCart } from "../components";

type CartScreenProps = NativeStackScreenProps<StackParamList, "Cart">;

export default function CartScreen({ navigation, route }: CartScreenProps) {
  return (
    <SafeAreaView className="flex flex-1 justify-between bg-orange-50">
      <View className="flex-row justify-start mx-5">
        <TouchableOpacity
          className="border border-gray-300 rounded-xl"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ChevronLeftIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="mx-5 flex-1">
        <Text style={{ color: themeColors.text }} className="text-2xl py-10">
          Your <Text className="font-bold">Cart</Text>
        </Text>
        <View>
          {cartItems.map((item, index) => {
            return <FruitCardCart {...item} key={index} />;
          })}
        </View>
        <View className="flex-row justify-end py-6 pb-10">
          <Text className="text-lg">
            Total Price:
            <Text className="font-bold text-yellow-500"> 420.8</Text>
          </Text>
        </View>
        <View className="flex-row justify-center mx-7">
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              opacity: 0.8,
              shadowColor: "orange",
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.4,
            }}
            className="p-3 flex-1 rounded-xl"
          >
            <Text className="text-xl text-center font-bold text-white">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
