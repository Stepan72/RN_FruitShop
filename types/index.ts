import { categories } from "../constants";
import { ColorValue, ImageSourcePropType } from "react-native";

export type StackParamList = {
  Home: undefined;
  Product: FruitCardProps;
  Cart: undefined;
};

export type Category = (typeof categories)[number];

export interface FruitCardProps {
  name: string;
  price: string;
  stars: number;
  desc: string;
  shadow: string;
  image: ImageSourcePropType;
  color: (opacity: number) => ColorValue;
}

export interface CartItemProps {
  name: string;
  price: string;
  qty: number;
  desc: string;
  shadow: string;
  image: ImageSourcePropType;
  color: (opacity: number) => ColorValue;
}
