import { categories } from "../constants";

export type StackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

export type Category = (typeof categories)[number];
