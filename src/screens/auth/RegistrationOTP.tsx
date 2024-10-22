import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { Screen } from "../Screen";
import { AuthHeader } from "@src/components/auth";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { BoldText, LightText } from "@src/components/shared/text";
import { DVH, DVW, moderateScale, screenHeight } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button } from "@src/components/shared/button";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const pinLength = 4;

export const RegistrationOTP = ({
  navigation,
}: AuthScreenProps<authScreenNames.REGISTRATION_OTP>) => {
  const [pinCode, setPinCode] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <Screen>
        <AuthHeader onPress={() => navigation.goBack()} />
        <View style={styles.titleContainer}>
          <BoldText mainColor sizeLarge>
            Verify your email
          </BoldText>
          <LightText sizeBody black>
            We've sent a four digit code to your email
            <LightText sizeBody mainColor>
              temi.owoade@gmail.com
            </LightText>
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
                            setModalVisible(!modalVisible);
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

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='check-circle-outline'
              size={100}
              color='green'
            />
            <View style={{ marginVertical: moderateScale(20) }}>
              <Text style={styles.modalTitle}>
                Email Verification Complete!
              </Text>
              <Text style={styles.modalMessage}>
                Congratulations! Your email has been verified successfully
              </Text>
            </View>
            <Button
              title='Continue'
              bgMainColor
              sizeBody
              textWhite
              style={{
                width: "100%",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate(authScreenNames.USER_CATEGORIES);
              }}
            />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: screenHeight / 2,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ff4500",
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
