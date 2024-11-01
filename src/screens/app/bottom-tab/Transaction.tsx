import React from "react";
import { Screen } from "../../Screen";
import { RegularText } from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { bottomTabScreenNames } from "@src/navigation";
import { StyleSheet, Text, View } from "react-native";

export const Transaction =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.TRANSACTION>) => {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Coming Soon</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  h1:{
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  }
});
