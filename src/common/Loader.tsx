import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type loaderProps = {
  color: string;
  size: "small" | "large";
};

export const Loader: React.FC<loaderProps> = ({ color, size }) => {
  return (
    <View style={style.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
