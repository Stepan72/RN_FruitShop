import { categories } from "../constants";
import { ColorValue, ImageSourcePropType } from "react-native";

export type StackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

export type Category = (typeof categories)[number];

export interface FruitCardProps {
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
