import React, { useState } from "react";
import { Screen } from "../Screen";
import { BoldText, LightText, RegularText } from "@src/components/shared/text";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { Platform } from "react-native";
import { Button } from "@src/components/shared/button";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

export const TopUp = ({
  navigation,
}: RootStackScreenProps<appScreenNames.TOP_UP>) => {
  const [pinCode, setPinCode] = useState<any[]>([]);
  const handleTransaction = () => {
      navigation.navigate(appScreenNames.PAYMENT_METHOD);
    };
  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={moderateScale(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <BoldText sizeBody black>
          Top up
        </BoldText>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: moderateScale(8),
          alignContent: "center",
          marginTop: moderateScale(40),
        }}
      >
        <BoldText warning>₦220.00</BoldText>
        <FontAwesome6
          name="arrow-right-arrow-left"
          size={moderateScale(12)}
          color="#DB3A09"
        />
        <BoldText warning>¥1</BoldText>
      </View>
      <View style={styles.sendScreen}>
        <BoldText sizeMedium black>
          How much would you like to send?
        </BoldText>
      </View>
      <View>
        <View style={styles.pinCode}>
          <View style={styles.selectedPinCode}>
            <RegularText sizeXtraLarge black>
            ₦{pinCode}
            </RegularText>
            <View
              style={{
                marginTop: moderateScale(10),
              }}
            >
              <BoldText warning>₦220.00</BoldText>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            gap: moderateScale(30),
          }}
        >
          <Button
            title="Continue"
            bgMainColor
            sizeBody
            textWhite
            onPress={handleTransaction}
          />
          <FlatList
            data={dialPad}
            scrollEnabled={false}
            numColumns={3}
            keyExtractor={(_, index) => index.toString()}
            columnWrapperStyle={{
              gap: moderateScale(30),
            }}
            contentContainerStyle={{
              gap: moderateScale(15),
            }}
            renderItem={({ item }) => (
              <View>
                {item === "" ? (
                  <View
                    style={{
                      width: DVW(20),
                      height: DVW(20),
                      backgroundColor: "transparent",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: DVW(20) / 2,
                    }}
                  />
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      if (item === "del") {
                        setPinCode((prevCode: any) =>
                          prevCode.slice(0, prevCode.length - 1)
                        );
                      } else if (typeof item === "number") {
                        setPinCode((prevCode: any) => [...prevCode, item]);
                      }
                    }}
                    style={styles.codeBtn}
                  >
                    {item === "del" ? (
                      <Ionicons
                        name="backspace-outline"
                        size={moderateScale(20)}
                        color={colors.black}
                      />
                    ) : item === "finger-print" ? (
                      <Ionicons
                        name="finger-print"
                        size={moderateScale(34)}
                        color={colors.black}
                      />
                    ) : item === "finger-print" ? (
                      <MaterialCommunityIcons
                        name="asterisk"
                        size={moderateScale(20)}
                        color={colors.lightGray}
                      />
                    ) : (
                      <LightText sizeMedium black>
                        {item}
                      </LightText>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_light_color,
    paddingTop:
      Platform.OS === "ios" ? verticalScale(35) : StatusBar.currentHeight,
    paddingHorizontal: moderateScale(21),
    paddingBottom: moderateScale(54),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  smText: {
    color: "#DB3A09",
  },
  sendScreen: {
    paddingVertical: DVH(3),
    flexDirection: "column",
  },
  pinCode: {
    flexDirection: "row",
    gap: moderateScale(10),
    marginBottom: DVH(4),
    alignItems: "center",
    justifyContent: "center",
  },
  selectedPinCode: {
    width: "100%",
    height: DVH(9),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  codeBtn: {
    width: DVW(20),
    height: DVW(20),
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: DVW(20) / 2,
  },
});
