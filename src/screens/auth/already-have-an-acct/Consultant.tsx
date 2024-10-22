import { Button } from "@src/components/shared/button";
import { BoldText, LightText } from "@src/components/shared/text";
import { DVH, moderateScale, screenHeight } from "@src/resources/scaling";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const Consultant = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <BoldText black sizeLarge>
          Welcome to Royal Tradebeta Consultants' Portal
        </BoldText>
        <LightText sizeBody black>
          Kindly sign with your work email credentials
        </LightText>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("@src/assets/slider/slider3.png")}
          resizeMode='cover'
          style={styles.img}
        />
      </View>
      <Button
        title='Sign in with you work email'
        bgMainColor
        textWhite
        sizeBody
        style={{
          width: "100%",
        }}
        onPress={() => {}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: "10%",
  },
  imgContainer: {
    width: "100%",
    height: "55%",
    borderRadius: moderateScale(20),
    overflow: "hidden",
    marginBottom: moderateScale(20),
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
