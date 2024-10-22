import { verticalScale } from "@src/resources/scaling";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

type verticalScrollContainer = {
  children: React.ReactNode;
};

export const VerticalScrollContainer: React.FC<verticalScrollContainer> = ({
  children,
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {children && children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: verticalScale(10),
  },
});
