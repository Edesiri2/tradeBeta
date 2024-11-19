import { Button, ButtonOutline } from "@src/components/shared/button";
import { BoldText, LightText, SemiBoldText } from "@src/components/shared/text";
import { carouselData } from "@src/contants/carousel-slider";
import { authScreenNames } from "@src/navigation";
import { moderateScale, screenWidth } from "@src/resources/scaling";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Screen } from "../Screen";
import { AuthScreenProps } from "@src/router/types";
import Swiper from "react-native-swiper";

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
          activeDotStyle={styles.activeDot}
        >
          {carouselData.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image
                resizeMode="cover"
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
          title="Register"
          bgMainColor
          sizeBody
          textWhite
          onPress={() => {
            navigation.navigate(authScreenNames.REGISTER_INFO);
          }}
        />
        <ButtonOutline
          title="Already have an account?"
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
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  swiper: {
    height: 600,
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
  textContainer: {
    position: 'absolute',
    bottom: -120,
    left: 10,
    right: 10,
    zIndex: 10,
    // top: 100,
    gap: moderateScale(1),
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: moderateScale(10),
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
});
