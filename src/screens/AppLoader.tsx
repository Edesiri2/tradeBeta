import React from "react";
import { Screen } from "./Screen";
import { Image, StyleSheet, View } from "react-native";
import { DVH, DVW } from "@src/resources/scaling";
import { Loader } from "@src/common";
import { colors } from "@src/resources/colors";
import { BoldText } from "@src/components/shared/text";

export const AppLoader: React.FC<{}> = () => {
  return (
    <Screen>
      <View style={styles.textContainer}>
        <BoldText sizeXtraLarge mainColor>
          Tradebeta
        </BoldText>
      </View>
      <View style={styles.container}>
        <Loader size='large' color={colors.main_color} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: DVW(70),
    height: DVH(70),
  },
});
