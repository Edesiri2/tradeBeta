import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { Screen } from "../../Screen";
import { AuthHeader } from "@src/components/auth";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { BoldText, LightText } from "@src/components/shared/text";
import { DVH, DVW, moderateScale, screenHeight } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const pinLength = 4;

export const CreateTransactionPin = ({
  navigation,
}: AuthScreenProps<authScreenNames.CREATE_TRANSACTION_PIN>) => {
  const [pinCode, setPinCode] = useState<any[]>([]);
  return (
    <>
      <Screen>
        <AuthHeader onPress={() => navigation.goBack()} />
        <View style={styles.titleContainer}>
          <BoldText mainColor sizeLarge>
            Create Transaction PIN
          </BoldText>
          <LightText sizeBody black>
            Please create a 4-digit PIN for your transaction
          </LightText>
        </View>

        <View>
          <View style={styles.pinCode}>
            {[...Array(pinLength).keys()].map((index) => {
              return (
                <View key={index} style={styles.selectedPinCode}>
                  <BoldText sizeXtraLarge black>
                    {pinCode[index]}
                  </BoldText>
                </View>
              );
            })}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
            }}>
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
                          if (
                            pinCode &&
                            pinCode.length ===
                              4 /*it checks through if the array is gr*/
                          ) {
                            navigation.navigate(
                              authScreenNames.CONFIRM_TRANSACTION_PIN,
                              {
                                transPin: pinCode,
                              }
                            );
                          } else {
                            setPinCode((prevCode: any) => [...prevCode, item]);
                          }
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
    </>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: moderateScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  selectedPinCode: {
    borderWidth: DVW(0.2),
    borderColor: colors.black,
    width: DVW(13),
    height: DVH(7),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
  },
});
