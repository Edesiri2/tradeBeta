import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Screen } from "../Screen";
import { carouselData } from "@src/contants/carousel-slider";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { Button, ButtonOutline } from "@src/components/shared/button";
import {
  BoldText,
  LightText,
  RegularText,
  SemiBoldText,
} from "@src/components/shared/text";
import { colors } from "@src/resources/colors";
import { DVH, moderateScale, screenWidth } from "@src/resources/scaling";

export const CarouselSlider = ({
  navigation,
}: AuthScreenProps<authScreenNames.CAROUSEL_SLIDER>) => {
  return (
    <Screen>
      <Swiper
        style={styles.swiper}
        showsPagination={true}
        showsButtons={false}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        autoplay={true}
        activeDotStyle={styles.activeDot}>
        {carouselData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              resizeMode='cover'
              source={item.image}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <SemiBoldText sizeSmall mainColor>
                {item.subtitle}
              </SemiBoldText>
              <BoldText sizeXtraLarge black>
                {item.title}
              </BoldText>
              <LightText sizeBody black>
                {item.description}
              </LightText>
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonContainer}>
        <Button
          title='Register'
          bgMainColor
          sizeBody
          textWhite
          onPress={() => {
            navigation.navigate(authScreenNames.REGISTER_INFO);
          }}
        />
        <ButtonOutline
          title='Already have an account?'
          borderMainColor
          sizeBody
          textMainColor
          onPress={() => navigation.navigate(authScreenNames.ALREADY_HAVE_ACCT)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  swiper: {
    height: 400,
  },
  itemContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: screenWidth - 20,
    height: 386,
    borderRadius: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#900000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "grey",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: moderateScale(10),
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
  },
  activeDot: {
    backgroundColor: "#DB3A09",
  },
  textContainer: {
    justifyContent: "space-between",
    gap: 5,
    marginLeft: moderateScale(-17),
  },
});
