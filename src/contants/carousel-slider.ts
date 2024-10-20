import { ImageSourcePropType } from "react-native";

interface CarouselData {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  description: string;
}
export const carouselData: CarouselData[] = [
  {
    image: require("@src/assets/slider/slider1.png"), // Local image import
    title: "Your Smartest Gateway to China.",
    subtitle: "Borderless",
    description: "Enjoy secure efficient, and hassle-fre RMB payments",
  },
  {
    image: require("@src/assets/slider/slider2.png"),
    title: "Unlock Chinas biggest Market",
    subtitle: "Easy payment",
    description:
      "Allowing you to focus on what truly matters in growing your business",
  },
  {
    image: require("@src/assets/slider/slider3.png"),
    title: "RMB Made Easy Just Like That",
    subtitle: "Buy & Sell",
    description:
      "With a seamless experience ensuring timely and accurate transactions every time.",
  },
];
