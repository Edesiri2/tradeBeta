import React, { useState } from "react";
import { Screen } from "../Screen";
import {
  BoldText,
  LightText,
  RegularText,
  SemiBoldText,
} from "@src/components/shared/text";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { Button } from "@src/components/shared/button";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

export const SendMoney = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SEND_MONEY>) => {
  const [pinCode, setPinCode] = useState<any[]>([]);
  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons
            name='arrow-back-ios'
            size={moderateScale(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <BoldText sizeBody black>
          Send RMB
        </BoldText>
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
              {pinCode}
            </RegularText>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            gap: moderateScale(30),
          }}>
          <Button
            title='Continue'
            bgMainColor
            sizeBody
            textWhite
            onPress={() => {}}
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
                    // disabled={item === "finger-print"}
                    style={styles.codeBtn}>
                    {item === "del" ? (
                      <Ionicons
                        name='backspace-outline'
                        size={moderateScale(20)}
                        color={colors.black}
                      />
                    ) : item === "finger-print" ? (
                      <Ionicons
                        name='finger-print'
                        size={moderateScale(34)}
                        color={colors.black}
                      />
                    ) : item === "finger-print" ? (
                      <MaterialCommunityIcons
                        name='asterisk'
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  sendScreen: {
    paddingVertical: DVH(5),
    flexDirection: "column",
  },
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: "15%",
  },
  otpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyle: {
    borderWidth: DVW(0.3),
    borderColor: colors.white,
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    width: DVW(12),
    height: DVH(7),
    textAlign: "center",
    borderBottomWidth: DVW(0.3),
    color: colors.black,
  },
  codeBtn: {
    width: DVW(20),
    height: DVW(20),
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: DVW(20) / 2,
  },
  pinCode: {
    flexDirection: "row",
    gap: moderateScale(10),
    marginBottom: DVH(10),
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
});
